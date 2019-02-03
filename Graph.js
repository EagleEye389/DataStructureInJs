class Graph{
    constructor(){
         this.adList ={}
    }

    AddVertex(v){
        if(!this.adList[v]){
             this.adList[v] = [];
        }
        else{
            console.log("It is already added");
        }
    }

    AddEdges(v1,v2){
        let vlist = this.adList[v1];
        if(vlist && (vlist.length == 0 || vlist.indexOf(v2) == -1))
        {
            vlist.push(v2);
        } 
        vlist = this.adList[v2];
        if(vlist && (vlist.length ==0 || vlist.indexOf(v1) == -1))
        {
            vlist.push(v1);
        }
    }

    RemoveEdge(v1,v2){
        if(this.adList[v1] && this.adList[v2])
          {
              let vlist  = this.adList[v1];
              this.adList[v1] =  vlist.filter(v=>v!=v2);
              vlist = this.adList[v2];
              this.adList[v2] = vlist.filter(v=>v!=v1);
          }
          else{
              console.log("Invalid vertex");
          }

    }

    RemoveVertex(v1){
        if(this.adList[v1]){
             while(this.adList[v1].length){
                 let removeVer = this.adList[v1].pop();
                 this.RemoveEdge(v1,removeVer);
             }

            delete this.adList[v1];
        }
    }

}

var g = new Graph();
g.AddVertex("Tokyo");
g.AddVertex("India");
g.AddVertex("Japan");
g.AddVertex("Aus");
g.AddVertex("China");
g.AddEdges("Tokyo","India");
g.AddEdges("India", "Aus");
g.AddEdges("Japan","Tokyo");
g.AddEdges("China","India");
g.AddEdges("China","Aus");
g.AddEdges("Tokyo","China");
console.log(g);
g.RemoveEdge("China","India");
console.log(g);
g.RemoveVertex("China");
console.log(g);