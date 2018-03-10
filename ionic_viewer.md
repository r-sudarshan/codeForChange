# Linking to ionic viewer

## Sign up

Sign up on ionic pro website with a free plan

Link - https://ionicframework.com/pro/view

Make note of the user ID

## Create an app

Create an app so that you can upload the code.
Make note of the app name.

## Uploading the code

Once the app is created ionic pro site will show you a page with the steps to add your code.
If you follow the steps as it is then it will re-init a git repo and you will lose your repo checked out from github.

Make note of the app name and the alphanumeric app ID from this page and you can use it to link this manually.

## Ionic SSH setup

From your ionic app folder run 'ionic login', enter the credentials from the sign up an follow the steps to setup a new ssh key to ionic pro.
This will allow you to upload code to the ionic git remote later

## Linking to ionic git remote

Run the link_ionic_viewer.sh script passing in 3 parameters - the alphanumeric ID, your user name and the name of the app you created.

If you run the script or manually, this is how it looks 

~~~~
iMac:app hari$ ionic config set app_id "fdc5b33f"

? Looks like a fresh checkout! No ./node_modules directory found. Would you like
 to install project dependencies? Yes
Installing dependencies may take several minutes!
> npm i
✔ Running command - done!
[OK] app_id set to "fdc5b33f" in ./ionic.config.json!
iMac:app hari$ git remote
origin
iMac:app hari$ git remote add ionic git@git.ionicjs.com:anarahari/c4c.git
iMac:app hari$ git remote
ionic
origin
iMac:app hari$ 

~~~~