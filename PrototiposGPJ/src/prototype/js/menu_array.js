//The following line is critical for menu operation, and MUST APPEAR ONLY ONCE. If you have more than one menu_array.js file rem out this line in subsequent files
menunum=0;menus=new Array();_d=document;
function addmenu(){
  menunum++;
  menus[menunum]=menu;
}
function dumpmenus(){
  mt="<script language=javascript>";
  for(a=1;a<menus.length;a++){
    mt+=" menu"+a+"=menus["+a+"];"
    }
    mt+="<\/script>";_d.write(mt)
}
// Special effect string for IE5.5 or above please visit http://www.milonic.co.uk/menu/filters_sample.php for more filters
effect = "Fade(duration=0.2);Alpha(style=0,opacity=90);Shadow(color='#777777', Direction=135, Strength=5)"

timegap=500			// The time delay for menus to remain visible
followspeed=5		// Follow Scrolling speed
followrate=40		// Follow Scrolling Rate
suboffset_top=4;	// Sub menu offset Top position
suboffset_left=6;	// Sub menu offset Left position
closeOnClick = true

style1=[			// style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"FFFFFF",	   		// Mouse Off Font Color
"2977B5",			// Mouse Off Background Color
"000000",			// Mouse On Font Color
"#D0DDED",			// Mouse On Background Color
"2977B5",			// Menu Border Color
12,					// Font Size in pixels
"normal",			// Font Style (italic or normal)
"normal",			// Font Weight (bold or normal)
"Verdana, Arial",	// Font Name
1,					// Menu Item Padding
"paginas/imagens/seta.gif",	// Sub Menu Image (Leave this blank if not needed)
,					// 3D Border & Separator bar
"66ffff",			// 3D High Color
"000099",			// 3D Low Color
,					// Current Page Item Font Color (leave this blank to disable)
,					// Current Page Item Background Color (leave this blank to disable)
,					// Top Bar image (Leave this blank to disable)
,					// Menu Header Font Color (Leave blank if headers are not needed)
,					// Menu Header Background Color (Leave blank if headers are not needed)
"FFFFFF",			// Menu Item Separator Color
]

  





