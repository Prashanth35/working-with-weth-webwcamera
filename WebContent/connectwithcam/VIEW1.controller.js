sap.ui.controller("connectwithcam.VIEW1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf connectwithcam.VIEW1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf connectwithcam.VIEW1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf connectwithcam.VIEW1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf connectwithcam.VIEW1
*/
//	onExit: function() {
//
//	}
	onpress:function() {
		

		  // Normalize the various vendor prefixed versions of getUserMedia.
		  navigator.getUserMedia = (navigator.getUserMedia ||
		                            navigator.webkitGetUserMedia ||
		                            navigator.mozGetUserMedia || 
		                            navigator.msGetUserMedia);
		// Check that the browser supports getUserMedia.
		// If it doesn't show an alert, otherwise continue.
		if (navigator.getUserMedia) {
		  // Request the camera.
		  navigator.getUserMedia(
		    // Constraints
		    {
		      video: true
		    },

		    // Success Callback
		    function(localMediaStream) {
		    	 video = document.querySelector('video');
                 video.src = window.URL.createObjectURL(localMediaStream);
                 webcamStream = localMediaStream;
		    },
		    

		    // Error Callback
		    function(err) {
		      // Log the error to the console.
		      console.log('The following error occurred when trying to use getUserMedia: ' + err);
		    }
		  );

		} else {
		  alert('Sorry, your browser does not support getUserMedia');
		}
		
		// Get access to the camera!
		
		 function stopWebcam(){
	          webcamStream.stop();
	      };
		 var canvas, ctx;

	      function init(){
	        // Get the canvas and obtain a context for
	        // drawing in it
	        canvas = document.getElementById("canvas");
	        ctx = canvas.getContext('2d');
	      }
	

	      function snapshot(){
	         // Draws current image from the video element into the canvas
	        ctx.drawImage(video, 0,0, canvas.width, canvas.height);
	      }

	}
		




		

});