---
layout: post
title: !binary |-
  cmRmOiBncmVhdCBmdXR1cmU=
wordpress_id: 219
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0yMTk=
date: 2008-10-24 21:04:49.000000000 +00:00
---
<ol>
<li><a href="http://drupal.org/project/rdf">Drupal RDF</a> rocks! this is WEB-3.0!</li>
<li>browse using <a href="http://getglue.com/">glue</></li>
<li>search <a href="http://dbpedia.org/">DBPedia</a> and <a href="http://wiki.dbpedia.org/Interlinking">the likes</a> using <a href="http://drupal.org/project/exhibit">exhibit</a> and <a href="http://drupal.org/project/sparql">sparql</a></li>
<li>create your ontologies with <a href="http://protege.stanford.edu/">protégé</a></li>
<li>Tag your content using OpenCalais</li>
<li>Share your content using Twine</li>
<li>profit!</li>
</ol>

<p>for now, see <a href="http://vytautas.jakutis.lt/node/30">this</a>. shows the results from <a href="http://dbpedia.org/sparql">DBPedia sparql endpoint</a> specified by this:</p>
<pre>
PREFIX owl: &lt;http://www.w3.org/2002/07/owl#&gt;
PREFIX xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;
PREFIX rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#&gt;
PREFIX rdf: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#&gt;
PREFIX foaf: &lt;http://xmlns.com/foaf/0.1/&gt;
PREFIX dc: &lt;http://purl.org/dc/elements/1.1/&gt;
PREFIX : &lt;http://dbpedia.org/resource/&gt;
PREFIX dbpedia2: &lt;http://dbpedia.org/property/&gt;
PREFIX dbpedia: &lt;http://dbpedia.org/&gt;
PREFIX skos: &lt;http://www.w3.org/2004/02/skos/core#&gt;

SELECT ?name ?description ?musician WHERE {
   ?musician skos:subject &lt;http://dbpedia.org/resource/Category:German_musicians&gt; .
   ?musician foaf:name ?name .
   OPTIONAL {
      ?musician rdfs:comment ?description .
      FILTER (LANG(?description) = 'en') .
   }
#   OPTIONAL {
#      ?musician rdfs:comment ?description_de .
#      FILTER (LANG(?description_de) = 'de') .
#   }
}
</pre>
