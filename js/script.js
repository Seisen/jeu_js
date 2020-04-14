var globalID
$(function () {
    var
      $canvas = $('#canvas'),
      ctx = $canvas[0].getContext('2d'),
      offset = $canvas.offset(),
      draw,
      handle;
      document.getElementById("img");
      document.getElementById("img1");
      document.getElementById("img2");
      document.getElementById("img3");
      document.getElementById("img4");
      document.getElementById("img5");
      document.getElementById("img6");
      document.getElementById("img7");
      document.getElementById("img8");
      document.getElementById("n");
      document.getElementById("n2");

      canvas.width =innerWidth; //document.width is obsolete
      canvas.height = innerHeight; //document.height is obsolete
      canvasW = canvas.width;
      canvasH = canvas.height;
      avancement=0;
      
    
      hauteur_mur=new Array(40);
      
     

    handle = {
      color: '#666',
      dim: { w: canvasW, h: canvasH },
      pos: { x: 300, y: 300 },
      pos_img: { x:100,y:100 },
      pos_decor:{ fond:0,mur:0}

    };

      
      var rd = Math.random();
      if (rd<0.25){

        hauteur_mur[0]=0;
      }else if (rd<0.5 && rd>0.25){
        hauteur_mur[0]=1;

      }else if (rd <0.75 && rd>0.5){
        hauteur_mur[0]=2;

      }else if(rd>0.75){
        hauteur_mur[0]=3;

      }
      for(i=1 ; i<40; i+=2){
        var rd = Math.random();
        if (rd<0.6 && hauteur_mur[i-1] <5 ){
           hauteur_mur[i] =hauteur_mur[i-1] +1;
           hauteur_mur[i+1] =hauteur_mur[i] +1;

        }else if ( hauteur_mur[i-1]>0){
          hauteur_mur[i] =hauteur_mur[i-1] -1;
          hauteur_mur[i+1] =hauteur_mur[i] -1;

        }else if (rd <0.6 && hauteur_mur[i]==5){
          hauteur_mur[i] =hauteur_mur[i-1] ;
          hauteur_mur[i+1] =hauteur_mur[i] ;
        }
       

          
      }

    draw = function() {

      avancement+=10;
      
      handle.pos_decor.fond -= 6;
      
      if (handle.pos_decor.fond < -140){
        handle.pos_decor.fond=0
      }

        //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        //ctx.fillStyle = handle.color;


        ctx.rotate(315 * Math.PI / 180);
        //ctx.fillRect(handle.pos.x, handle.pos.y, handle.dim.w, handle.dim.h);

        ctx.rotate(45 * Math.PI / 180);

        ctx.drawImage(img2, handle.pos_decor.fond, (6*canvasH/100));//fond

        ctx.drawImage(img, handle.pos_img.x, handle.pos_img.y);//perso

        

       // for (i = 0; i < 40; i++) { 
       //   ctx.drawImage(img3,  canvasW-i*(canvasW/38)-avancement, (canvasH/2));
       // }
       // avancement+=9;


       for (i=0;i<40;i++){
        if (hauteur_mur[i]==1){


        
         ctx.drawImage(img3,  canvasW-i*(canvasW/38)-avancement, 10*canvasH/100);
         ctx.drawImage(img7,  canvasW-i*(canvasW/38)-avancement, canvasH-(40.4*canvasH/100));

        }else if(hauteur_mur[i]==2){

          ctx.drawImage(img4,  canvasW-i*(canvasW/38)-avancement, 10*canvasH/100);
          

          
          ctx.drawImage(img6,  canvasW-i*(canvasW/38)-avancement, canvasH-(35.4*canvasH/100));
         

        }else if(hauteur_mur[i]==3){

          ctx.drawImage(img5,  canvasW-i*(canvasW/38)-avancement, 10*canvasH/100);
          
          
          ctx.drawImage(img5,  canvasW-i*(canvasW/38)-avancement, canvasH-(30.3*canvasH/100));
         
        

        }else if(hauteur_mur[i]==4){

          ctx.drawImage(img6,  canvasW-i*(canvasW/38)-avancement, 10*canvasH/100);
         
          ctx.drawImage(img4,  canvasW-i*(canvasW/38)-avancement, canvasH-(25.2*canvasH/100));
          

        }else if(hauteur_mur[i]==5){

          ctx.drawImage(img7,  canvasW-i*(canvasW/38)-avancement, 10*canvasH/100);
          
          ctx.drawImage(img3,  canvasW-i*(canvasW/38)-avancement, canvasH-(20*canvasH/100));
        }else if (hauteur_mur[i]==0){

          ctx.drawImage(img3,  canvasW-i*(canvasW/38)-avancement, 10*canvasH/100);
          ctx.drawImage(img8,  canvasW-i*(canvasW/38)-avancement, canvasH-(45.4*canvasH/100));
        }
      }
      
     

      if (avancement==100){
        avancement=0;
        for(i=39;i>0;i--){
          hauteur_mur[i]=hauteur_mur[i-1];
        }
        for(i=39;i>0;i--){
          hauteur_mur[i]=hauteur_mur[i-1];
        }
        
        var rd = Math.random();
        if (rd<0.6 && hauteur_mur[2] <4){
          hauteur_mur[1] =hauteur_mur[2] +1;
           hauteur_mur[0] =hauteur_mur[1] +1;

        }else if ( hauteur_mur[2]>0){
          hauteur_mur[1] =hauteur_mur[2] -1;
          hauteur_mur[0] =hauteur_mur[1] -1;

        }else if (rd <0.6 && hauteur_mur[2]==5){
          hauteur_mur[1] =hauteur_mur[2] ;
          hauteur_mur[0] =hauteur_mur[1] ;
        }

      }
      
        $(document).keypress(function(evt) {
          if (evt.which==32){

              handle.pos_img.x+=5;
          }
      });
      globalID = requestAnimationFrame(draw);
      };

      globalID = requestAnimationFrame(draw);
      
});
