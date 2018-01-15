# Node color scaling submenu
- this is a submenu of a larger app, where you can set a color range for nodes in your graph
- this React application was built by using create-react-app. More info [here](https://github.com/facebookincubator/create-react-app)
- node-color-scaling.html is an older (HTML/CSS/JS) version
- currently you can:
    - click on the scale button to disable H, S, L buttons at the top, and also to disable the second pointer; 
    - click on either H, S or L button, which gives you access to the second pointer to set the range of the selected attr.
    - change the pointer's horizontal position with input boxes

![alt text](https://i.imgur.com/dfgeOp7.png)

#### TODO:
- simplify the current architecture
- more lifecycle methods
- state management (redux / flux)
- responsive design: different layout for mobile (2D)
- https://react-bootstrap.github.io
- scale more than 1 property
- https://github.com/vlad-ignatov/react-numeric-input
- tests
