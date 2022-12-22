import vl from 'vega-lite-api';
export const viz = vl.markCircle({size:200,opacity:0.3})
.encode(
  vl.x().fieldQ('mpg').scale({zero:false})    ,
  vl.y().fieldQ('horsepower').scale({zero:false}),
  vl.color().fieldN('origin'),
  vl.size().fieldQ('horsepower'),
  vl.tooltip().fieldN('name')    
  );
