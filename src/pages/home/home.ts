import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import * as THREE from 'three';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('domObj') canvasEl: ElementRef;
  private _ELEMENT : any;
  private _SCENE;
  private _CAMERA;
  public renderer;
  private _GEOMETRY;
  public _MATERIAL;
  public _CUBE;
  public CUBE2;
  public  CUBE3;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() : void
  {
    this.initialiseWebGLObjectAndEnvironment();
    this.renderAnimation();
  }
  initialiseWebGLObjectAndEnvironment() : void
  {
    this._ELEMENT 			= this.canvasEl.nativeElement;
    this._SCENE 				= new THREE.Scene();
    this._CAMERA 				= new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    this.renderer 			= new THREE.WebGLRenderer({alpha:true});
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this._ELEMENT.appendChild( this.renderer.domElement );
    this._GEOMETRY 			= new THREE.BoxGeometry( 1, 1, 1 );
    var fishpic = THREE.ImageUtils.loadTexture("../assets/imgs/f1.png")
    this._MATERIAL 			= new THREE.MeshBasicMaterial( {map:fishpic } );
    this._CUBE 				= new THREE.Mesh( this._GEOMETRY, this._MATERIAL );
    this._SCENE.add(this._CUBE);

    this._GEOMETRY 			= new THREE.PlaneGeometry( 1, 1, 1 );
    var fishpic1 = THREE.ImageUtils.loadTexture("../assets/imgs/f2.png")
    this._MATERIAL 			= new THREE.MeshBasicMaterial( {map:fishpic1 } );
    this. CUBE2 				= new THREE.Mesh( this._GEOMETRY, this._MATERIAL );
    this._SCENE.add(this.CUBE2);

    this._GEOMETRY 			= new THREE.PlaneGeometry( 1, 1, 1 );
    var fishpic2 = THREE.ImageUtils.loadTexture("../assets/imgs/f3.png")
    this._MATERIAL 			= new THREE.MeshBasicMaterial( {map:fishpic2 } );
    this. CUBE3 				= new THREE.Mesh( this._GEOMETRY, this._MATERIAL );
    this.CUBE3.position.x=1.5;
    this._SCENE.add(this.CUBE3);

    this._CAMERA.position.z 	= 5;
  }
  private _animate () : void
  {
    requestAnimationFrame(() =>
    {
      this._animate();
    });
    this._CUBE.translateX(0.015);
    this._CUBE.rotation.y += 0.015;
    this.renderer.render(this._SCENE, this._CAMERA);

    this.CUBE2.translateY(0.0025);
    this.CUBE3.rotation.z +=(0.025);
    this.CUBE3.translateY(0.045);
  };
  renderAnimation() : void
  {
    this._animate();
  }


}


