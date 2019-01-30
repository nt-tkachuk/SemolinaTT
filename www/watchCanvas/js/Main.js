
let canvas = document.getElementsByTagName( 'canvas' )[ 0 ];
let ctx = canvas.getContext( '2d' );
let width = 600
let height = 600;

ctx.translate(300, 300)
let analogWatch = new AnalogWatch(ctx, width, height);