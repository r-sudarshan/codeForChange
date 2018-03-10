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

## Pushing code to viewer

Make sure that you do a git pull --rebase from origin on github and get all changes before you push to ionic view.
If there are conflicts or issues with pushing to remote ionic, then it is safer to delete the ionic view app and recreate it.

Simply run 'git push ionic master" or your branch to push code and test.

This will  print out log showing the a build was triggered on the ionic website. There is a root level package.json file to make sure this build passes.
Go to the ionic website and check that the build has passed.

## Deploy to channel

Once the build passes, click on the deploy link in the builds page next to the successful build and deploy to the master channel.
Once this is done you will be able to view the app on the viewer.

## View the app 

Download the ionic view app on your iPhone or Android and login with the ionic pro credentials.
If your builds pass then you should be able to see your app and test it.

## Notes

The build process is customized since we dont commit the root of the app to the root of github.
This means that there is a copy of ionic config in the root of git repo and there is another package.json to make the build run in the app folder.
Also the www output directory is created at the root of the repo - this is again needed for ionic to work.