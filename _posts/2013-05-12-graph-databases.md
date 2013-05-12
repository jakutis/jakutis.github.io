---
layout: post
title: Graph Databases
date: 2013-05-12
---
The overview below is not in a finished state.

## Products

This is a list of databases that meet these requirements:

  * at least some development activity during the last 365 days
  * source code is publicly available

### OQGraph

  * GPLv2
  * graph-store
  * engine for MariaDB
  * http://openquery.com/products/graph-engine

### ArangoDB

   * Apache2
   * graph-store, keyvalue-store, document-store
   * network server
   * has ArchLinux package

### OrientDB

   * Affero GPL 3
   * graph-store, document-store
   * network server
   * infrastructure
     * https://github.com/eduardoejp/clj-orient
     * https://github.com/DamonOehlman/graphdb-orient

### Rexster

   * BSD
   * graph-store
   * network server
   * infrastructure
     * http://bulbflow.com/overview/

### Neo4j

   * licensing:
     * community for free (since it is GPL, our product must also be GPL, i.e. opensource, using this)
     * advanced 6000USD anually per instance (NTCL or AGPL, i.e. our product can be closed source, only if it communicates with instance over network)
       * adds Advanced Monitoring
     * enterprise 24000USD anually per instance (NTCL or AGPL, i.e. our product can be closed source, only if it communicates with instance over network)
       * adds Online Backup, High Availability Clustering, and Advanced Monitoring
   * graph-store
   * network server, library for Java
   * has ArchLinux package
   * has Heroku addon
   * most popular graph-store
   * infrastructure
     * http://clojure-libraries.appspot.com/library/neocons
     * http://clojure-libraries.appspot.com/library/Borneo
     * https://github.com/thingdom/node-neo4j
     * http://bulbflow.com/overview/
     * https://github.com/robinedwards/neomodel

### Titan

   * Apache2
   * graph-store
   * network server
   * infrastructure
     * http://titanium.clojurewerkz.org/
     * http://ogre.clojurewerkz.org/

### Jiraph

   * Eclipse
   * graph-store
   * library for Clojure
   * http://jiraph.org/

### Riak

   * Apache2
   * document-store
   * network server
   * http://nosql.mypopescu.com/post/1421755349/riak-storing-an-rdf-graph

### HypergraphDB

   * LGPL
   * directedhypergraph-store
   * network server
   * http://code.google.com/p/hypergraphdb/

### InfoGrid

   * AGPL
   * graph-store
   * network server
   * http://svn.infogrid.org/infogrid/trunk/

## Comparisons

  * orientdb vs. neo4j vs. titan: https://news.ycombinator.com/item?id=5493315
  * orientdb vs. neo4j vs. dex vs. infinitegraph: https://github.com/nuvolabase/orientdb/wiki/GraphDB-Comparison
  * xgdbench.pdf
  * Titan is to Neo4j, as Cassandra is to SQLite: https://news.ycombinator.com/item?id=5493330
  * http://java.dzone.com/news/nosql-graph-database-feature
  * http://renzoangles.blogspot.com/p/graph-databases-vs-rdf-databases.html
  * http://nosql.mypopescu.com/post/13771987424/a-survey-of-graph-databases-for-the-java-programmers
  * http://jasperpeilee.wordpress.com/2011/11/25/a-survey-on-graph-databases/
  * http://dbpedias.com/wiki/NoSQL:Survey_of_Distributed_Databases#Graph_Databases_2

## Ideas

  * http://www.meetup.com/graphdb-boston/
  * MongoDB as a staging repository for repositories like Neo4j http://www.meetup.com/graphdb-boston/events/91703472/
  * http://wiki.python.org/moin/PythonGraphApi

## More

  * http://en.wikipedia.org/wiki/Graph_database
  * https://www.hnsearch.com/search#request/all&q=graphdb&sortby=create_ts+desc&start=0
  * http://totemdb.whu.edu.cn/dasfaa2013/
  * http://www.infoq.com/graphdatabase/
  * https://www.google.lt/search?q=java+graph+database
  * http://stackoverflow.com/questions/1754628/graph-database-in-java-other-than-neo4j

## Theory

    TODO
