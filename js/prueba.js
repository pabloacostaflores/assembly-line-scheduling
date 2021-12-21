
var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    boxSelectionEnabled: false,
  
    style: [
      {
        selector: 'node',
        css: {
          'background-color': 'green',
          'content': 'data(num)',
          'text-valign': 'center',
          'text-halign': 'center'
        }
      },
      {
        selector: ':parent',
        css: {
          'background-color': 'gray',
          'text-valign': 'top',
          'text-halign': 'center',
        }
      },
      {
        selector: 'edge',
        css: {
          //'content': 'data(num)',
          'text-valign': 'left',
          'font-size': 'x-small', 
          'curve-style': 'bezier',
          'target-arrow-shape': 'triangle'
        }
      }
    ],
  
    elements: {
      nodes: [
        //{ data: { id: 'aux'}, position: { x: 150, y: 85 } },
        { data: { id: 'x' } },
        { data: { id: 'a', num: 5, parent: 'x' }, position: { x: 200, y: 85 } },
        { data: { id: 'b', num: 6, parent: 'x' }, position: { x: 250, y: 85 } },
        { data: { id: 'c', num: 15, parent: 'x' }, position: { x: 300, y: 85 } },
        
        //{ data: { id: 'aux', num: 0}, position: { x: 450, y: 85 } },
        { data: { id: 'y' } },
        //{ data: { id: 'aux', num: 0}, position: { x: 150, y: 150 } },
        { data: { id: 'f', num: 30, parent: 'y' }, position: { x: 200, y: 150 } },
        { data: { id: 'g', num: 35, parent: 'y' }, position: { x: 250, y: 150 } },
        { data: { id: 'h', num: 40, parent: 'y' }, position: { x: 300, y: 150 } },
        //{ data: { id: 'aux', num: 0}, position: { x: 450, y: 150 } }
      ],
      edges: [
        //Linea X
        //{ data: { id: 'toA', num: 0, source: '',target: 'a' } },
        { data: { id: 'ab', num: 1, source: 'a', target: 'b' } },
        { data: { id: 'bc', num: 2, source: 'b', target: 'c' } },
        //Linea Y
        { data: { id: 'fg', num: 5, source: 'f', target: 'g' } },
        { data: { id: 'gh', num: 6, source: 'g', target: 'h' } },
        //Intersecciones
        { data: { id: 'ag', num: 9, source: 'a', target: 'g' } },
        { data: { id: 'fb', num: 10, source: 'f', target: 'b' } },
        { data: { id: 'bh', num: 11, source: 'b', target: 'h' } },
        { data: { id: 'gc', num: 12, source: 'g', target: 'c' } },
      ]
    },
  
    layout: {
      name: 'preset',
      padding: 5
    }
  });


  function easyTabs() {
    var groups = document.querySelectorAll('.t-container');
    if (groups.length > 0) {
      for (i = 0; i < groups.length; i++) {
        var tabs = groups[i].querySelectorAll('.t-tab');
        for (t = 0; t < tabs.length; t++) {
          tabs[t].setAttribute("index", t+1);
          if (t == 0) tabs[t].className = "t-tab selected";
        }
        var contents = groups[i].querySelectorAll('.t-content');
        for (c = 0; c < contents.length; c++) {
          contents[c].setAttribute("index", c+1);
          if (c == 0) contents[c].className = "t-content selected";
        }
      }
      var clicks = document.querySelectorAll('.t-tab');
      for (i = 0; i < clicks.length; i++) {
        clicks[i].onclick = function() {
          var tSiblings = this.parentElement.children;
          for (i = 0; i < tSiblings.length; i++) {
            tSiblings[i].className = "t-tab";
          }
          this.className = "t-tab selected";
          var idx = this.getAttribute("index");
          var cSiblings = this.parentElement.parentElement.querySelectorAll('.t-content');
          for (i = 0; i < cSiblings.length; i++) {
            cSiblings[i].className = "t-content";
            if (cSiblings[i].getAttribute("index") == idx) {
              cSiblings[i].className = "t-content selected";
            }
          }
        };
      }
    }
  }

