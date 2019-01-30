
let canvas = document.getElementsByTagName( 'canvas' )[ 0 ];
let ctx = canvas.getContext( '2d' );

let culc = new Calculator(ctx, 5, 5);
culc.width = 180;
culc.height = 70;