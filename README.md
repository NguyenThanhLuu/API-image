## How application work 
1. Run app
   1. Use script "npm run start" to run app and open browser at localhost:3000
   2. See example on screen 
   3. Click link to render image 
   4. Must have all full three field include: image name, height image and width image. If not user will see the error on the screen 
   5. Height image and width image must valid (only number). If not user will see the error on the screen 
   6. If all three field is full and valid but NOT found image name in folder's app user will see the error on the screen 
   7. If all three field is full, valid and found image with name, height and width already in thumb image folder the image in that folder will render to UI for user
   8. If all three field is full, valid and not found image with name, width, height already in thumb image folder, but when find name of image in full image folder is have, will create duplicate image with height and width user input in thumb folder and render this image to UI for user
2. Run test
   1. Run testing app with script "npm run test"
3. Run lint
   1. Run lint app with script "npm run lint"
4. Run prettier
   1. Run prettier to format again app with script "npm run prettier"
5. Endpoint use in project 
   1. http://localhost:3001/api/images?fileName=tayson&width=400&height=200

