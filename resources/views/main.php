<!DOCTYPE html>
<html>
<head>
    <title>CRUD Library</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body ng-app="crudApp">
<div class="wrapper">
    <header>
        <h1><a href="#/">CRUD Library</a></h1>
        <p><a href="#/">Create Read Update Delete</a></p>
    </header>
    <nav>
        <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About</a></li>
        </ul>
    </nav>

    <div ng-view></div>

    <footer>
        Copyright &copy; gumbulix 2016.
    </footer>
</div>
<a href="#/add" class="addBtn">+</a>


<script type="text/javascript" src="js/lib/angular.min.js"></script>
<script type="text/javascript" src="js/lib/angular-route.min.js"></script>
<script type="text/javascript" src="js/lib/angular-resource.min.js"></script>
<script type="text/javascript" src="js/app.js"></script>
<script type="text/javascript" src="js/route.js"></script>
<script type="text/javascript" src="js/service.js"></script>
<script type="text/javascript" src="js/controller.js"></script>
</body>
</html>