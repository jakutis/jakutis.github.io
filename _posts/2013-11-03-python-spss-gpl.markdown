---
layout: post
title: Taking control of charts in SPSS
date: 2013-11-03 23:08:00.000000000 +02:00
---
Below is an example script that draws simple bar charts.
It was the only acceptable way for me to programmatically generate charts in SPSS.
There is something to note here - this solution needs tree distinct scripting languages:

0. The script is written in [Python](http://python.org) - which is integrated in SPSS 22. For older versions you need a [Python plugin](https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/We70df3195ec8_4f95_9773_42e448fa9029/page/Downloads%20for%20IBM%C2%AE%20SPSS%C2%AE%20Statistics).
0. The code in `SpssClient.RunSyntax` call is in [SPSS Command Syntax](http://pic.dhe.ibm.com/infocenter/spssstat/v20r0m0/index.jsp?topic=%2Fcom.ibm.spss.statistics.help%2Fsyn_refintro_overview.htm).
0. The code between `BEGIN GPL` and `END GPL` is in [Graphics Production Language (GPL)](http://pic.dhe.ibm.com/infocenter/spssstat/v20r0m0/index.jsp?topic=%2Fcom.ibm.spss.statistics.help%2Fgpl_intro_basics.htm).

{% highlight python linenos=table %}
import SpssClient
import string
import xml.etree.ElementTree as ET

SpssClient.StartClient()
print("Started.")

SpssClient.RunSyntax(r"""
GET FILE="D:\mydata.sav".
DATASET NAME mydata.
""")

def draw_chart_bars(id, column, dataset):
    SpssClient.RunSyntax(string.Template(r"""
    GGRAPH
        /GRAPHDATASET NAME="${id}" DATASET=${dataset} VARIABLES=${column} REPORTMISSING=YES
        /GRAPHSPEC SOURCE=INLINE.
    BEGIN GPL
        SOURCE: s=userSource(id("${id}"))
        DATA: d=col(source(s), name("${column}"), unit.category())
        GUIDE: axis(dim(2), gridlines())
        ELEMENT: interval(position(summary.count(d)))
    END GPL.
    """).substitute(locals()))

def export_chart(id, filename):
    OutputDoc = SpssClient.GetDesignatedOutputDoc()
    OutputItems = OutputDoc.GetOutputItems()
    for index in range(OutputItems.Size()):
        OutputItem = OutputItems.GetItemAt(index)
        if OutputItem.GetType() == SpssClient.OutputItemType.CHART:
            ChartItem = OutputItem.GetSpecificType()
            root = ET.fromstring(OutputItem.GetXML())
            source = root.find(".//*[@id='d']")
            if id == source.attrib['source']:
                OutputItem.ExportToImage(filename, SpssClient.ChartExportFormat.png)

for column in ["color", "brand"]:
    draw_chart_bars(column = column, dataset = "mydata", id = "mychart" + column)
    export_chart(filename = "D:/" + column + ".png", id = "mychart" + column)
    print("Done: " + column)

SpssClient.StopClient()
print("Finished.")
{% endhighlight %}

P.S. Yes, I am aware of a performance bug in `export_chart` function where it parses the XMLs of each `OutputItem`.
