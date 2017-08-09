angular.module('app', [])
  .controller('main', ['$scope', function($scope) {
    'use strict';
    var dom = forumBody;
    var data = [
      {
        "parent": null,
        "id": "1.1",
        "userId": "user",
        "dateCreated": 1446072633032,
        "note": "L1 A",
        "replies": [
          {
            "parent": null,
            "id": "1.1.1",
            "userId": "user",
            "dateCreated": 1446072633032,
            "note": "L2 A",
            "replies": [
              {
                "parent": null,
                "id": "1.1.1",
                "userId": "user",
                "dateCreated": 1446072633032,
                "note": "L3 A",
                "replies": []
              }
          ]
          }
        ]
      },
      {
        "parent": null,
        "id": "1.2",
        "userId": "user",
        "dateCreated": 1446072633032,
        "note": "L1 B",
        "replies": [
          {
            "parent": null,
            "id": "1.2.1",
            "userId": "user",
            "dateCreated": 1446072633032,
            "note": "L2 B",
            "replies": []
          }
        ]
      }
    ];
    var postTemplate =
      "<b>" +
      "{{userId}}," +
      "{{dateCreated}}Z |" +
      "<a class='pointer'>Reply</a>" +
      "</b>" +
      "<pre class='note-text'>{{note}}</pre>";

    $scope.addPost = function() {
      console.log('Adding a post.');
      var posts = build(data);
      dom.appendChild(posts);
    };
    var build = function(nodes) {
      var parent = document.createElement('div');
      var element = document.createElement('empty');
      nodes.forEach(function(node) {
        element = createPost(node);
        parent.appendChild(element);
        var children = node.replies;
        element.appendChild(build(children));
      });
      return parent;
    };
    var createPost = function(data) {
      var tmp = document.createElement('div');
      tmp.classList.add('forumPost');
      var inner = postTemplate;
      inner = inner.replace('{{userId}}', data.userId);
      inner = inner.replace('{{dateCreated}}', data.dateCreated);
      inner = inner.replace('{{note}}', data.note);
      tmp.innerHTML = inner;
      tmp.firstElementChild.lastElementChild.onclick = function(e) { 
        replypost(e);
      };
      return tmp;
    };
    var replypost = function(e) {
      var parent = e.toElement.parentElement.parentElement;
      var container = document.createElement('div');
      
    };
  }]);