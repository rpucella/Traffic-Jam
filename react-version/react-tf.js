

var BOARD = [
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1
]


/* position in [0,35]   
   orientation = 0 -> r , 1 -> d
   goal = true if piece is the X piece
 */

var PIECES = [


    { size: 2,
      name: "X",
      position: -1,
      orientation: -1,
      color: "red",
      goal: true },

    { size: 2,
      name: "A",
      position: -1,
      orientation: -1,
      color: "green",
      goal: false },
    { size: 2,
      name: "B",
      position: -1,
      orientation: -1,
      color: "orange",
      goal: false },
    { size: 2,
      name: "C",
      position: -1,
      orientation: -1,
      color: "blue",
      goal: false },
    { size: 2,
      name: "D",
      position: -1,
      orientation: -1,
      color: "pink",
      goal: false },
    { size: 2,
      name: "E",
      position: -1,
      orientation: -1,
      color: "DarkViolet",
      goal: false },
    { size: 2,
      name: "F",
      position: -1,
      orientation: -1,
      color: "DarkGreen",
      goal: false },
    { size: 2,
      name: "G",
      position: -1,
      orientation: -1,
      color: "DarkSlateGrey",
      goal: false },
    { size: 2,
      name: "H",
      position: -1,
      orientation: -1,
      color: "BurlyWood",
      goal: false },
    { size: 2,
      name: "I",
      position: -1,
      orientation: -1,
      color: "Yellow",
      goal: false },
    { size: 2,
      name: "J",
      position: -1,
      orientation: -1,
      color: "Chocolate",
      goal: false },
    { size: 2,
      name: "K",
      position: -1,
      orientation: -1,
      color: "ForestGreen",
      goal: false },

    { size: 3,
      name: "O",
      position: -1,
      orientation: -1,
      color: "Gold",
      goal: false },
    { size: 3,
      name: "P",
      position: -1,
      orientation: -1,
      color: "Orchid",
      goal: false },
    { size: 3,
      name: "Q",
      position: -1,
      orientation: -1,
      color: "MediumBlue",
      goal: false  },
    { size: 3,
      name: "R",
      position: -1,
      orientation: -1,
      color: "Turquoise",
      goal: false }
]

var GAMES = [
    {level:"beginner-1",
     code:"A11r:B15d:C55r:O61d:P12d:Q42d:R36r:X23r"},
    {level:"beginner-2",
     code:"A11d:B42d:C53d:D35d:E55r:F16r:G46r:O41r:P62d:Q14r:X13r"},
    {level:"beginner-3",
     code:"A24r:B25d:C36r:O43d:P64d:X23r"},
    {level:"beginner-4",
     code:"A34d:B65d:O11d:P41d:Q44r:R36r:X23r"},
    {level:"beginner-5",
     code:"A11r:B61d:D15d:E55r:F56r:G63d:O41d:P12d:Q52d:R24r:X23r"},
    {level:"beginner-6",
     code:"A11r:B41d:C12r:D14r:E34d:F15d:O52d:P62d:Q43d:R46r:X23r"},
    {level:"beginner-7",
     code:"A21d:B31r:C51d:D61d:E42d:F63d:H45d:I34r:X23r"},
    {level:"beginner-8",
     code:"A41r:B32r:C52d:D33d:E43d:F14r:G54r:H15r:I35d:K16r:O61d:P45r:Q46r:X13r"},
    {level:"beginner-9",
     code:"A21d:B31r:C51r:D42d:E52r:F63d:G35d:H65d:O53d:P14d:Q24r:X13r"},
    {level:"beginner-10",
     code:"A11r:B31d:C51r:D12r:E45d:F55r:G16r:H56r:O62d:P13d:Q24r:X23r"},

    {level:"intermediate-11",
     code:"A21r:B34d:E65d:O11d:P41d:Q44r:R36r:X23r"},
    {level:"intermediate-12",
     code:"A11d:B21r:C55d:O61d:P32d:Q44r:R16r:X13r"},
    {level:"intermediate-13",
     code:"A11r:B31r:C51d:D32d:E23d:F44r:G45d:H55r:I26r:K56r:O62d:P14d:X43r"},
    {level:"intermediate-14",
     code:"A11r:B31d:C52r:D13d:E23d:F53d:G63d:H34r:I35d:J55r:K16r:X33r"},
    {level:"intermediate-15",
     code:"A21r:B41r:C12r:D32r:E34d:F44d:G55r:H26r:I46r:O52d:P62d:Q13d:R23d:X33r"},
    {level:"intermediate-16",
     code:"A11r:B31r:C51d:D12d:E32r:F23d:G16r:O61d:P33d:Q44r:X43r"},
    {level:"intermediate-17",
     code:"A11d:B32r:C52r:D33d:E14r:F55d:G65d:O21r:P44d:Q15r:R16r:X13r"},
    {level:"intermediate-18",
     code:"A11r:B31d:C12r:D25r:O41d:P13d:Q24r:R16r:X23r"},
    {level:"intermediate-19",
     code:"A31d:B41r:D23d:E34r:F54d:J52d:O25r:X33r"},
    {level:"intermediate-20",
     code:"A11d:B22r:C42d:D33d:E35d:F45r:O41r:P63d:Q46r:X13r"},

    {level:"advanced-21",
     code:"A11r:B31d:O41d:P12d:Q24r:R46r:X23r"},
    {level:"advanced-22",
     code:"A31d:B12d:C52r:D24d:E54r:F15d:G35r:H65d:O41r:P42d:Q26r:X23r"},
    {level:"advanced-23",
     code:"A32d:B42r:C34d:D44d:E54r:F55r:O31r:P61d:Q36r:X43r"},
    {level:"advanced-24",
     code:"A31d:B41r:C22d:D13d:E53d:F24r:G55d:H16r:O15r:X33r"},
    {level:"advanced-25",
     code:"A11r:B31d:C51r:D12r:E53d:F25d:G45d:H55r:I56r:O62d:P13d:Q24r:X23r"},
    {level:"advanced-26",
     code:"A21d:B12d:C42d:D63d:E14d:F35d:G65d:H46r:O41r:P52d:R24r:X23r"},
    {level:"advanced-27",
     code:"A11d:B21r:C22r:D33d:E44r:F35d:O41d:P63d:R46r:X13r"},
    {level:"advanced-28",
     code:"A41d:B52r:C14d:D24d:E44r:F16r:G36r:O11r:P32d:Q64d:R35r:X13r"},
    {level:"advanced-29",
     code:"A32d:B63d:C14d:D24r:E44r:F25r:G45d:H65d:O11r:P51d:R16r:X13r"},
    {level:"advanced-30",
     code:"A31d:B42d:C14r:D34r:E16r:F36r:O11d:P41r:Q64d:X23r"},

    {level:"expert-31",
     code:"A11r:B42d:C52r:D13d:E44r:F15r:O41r:P63d:Q34d:R46r:X23r"},
    {level:"expert-32",
     code:"A11r:B41d:C51r:D14d:E24r:F44r:H16r:K45d:O31d:P64d:X13r"},
    {level:"expert-33",
     code:"A21d:B51r:D24r:E44r:F25r:G45d:H55d:I14d:P64d:Q16r:R31d:X13r"},
    {level:"expert-34",
     code:"A11d:B42d:C53d:D44d:E35d:F55r:H46r:I16r:P62d:Q14r:R41r:X13r"},
    {level:"expert-35",
     code:"A41r:B42d:D25r:E45d:F55d:G16r:K14d:O31d:P61d:Q24r:X13r"},
    {level:"expert-36",
     code:"A51r:B22d:C32r:D44d:E35d:F55r:G16r:O11d:P21r:Q62d:R14r:X33r"},
    {level:"expert-37",
     code:"A11r:B31d:C51r:D12r:E45d:F55r:G16r:H56r:O52d:P62d:Q13d:R24r:X23r"},
    {level:"expert-38",
     code:"A11d:B22r:C42d:D33d:E44r:F35d:G45r:O41r:Q46r:R63d:X13r"},
    {level:"expert-39",
     code:"A31d:B42d:C33d:D14r:E44r:F15d:G25d:H35r:I36r:O41r:R63d:X13r"},
    {level:"expert-40",
     code:"A21r:B51d:C22d:D32d:E44d:F35d:G55r:H16r:I46r:O11d:P62d:Q14r:X43r"},

];

function initialize_board () {
    
    BOARD.forEach(function(d,i) { BOARD[i] = -1; });
}

function position (x,y) {

    return y * 6  +x;
}

function xy_position (position) {

    if (position > -1) {
	var x = position % 6;
	var y = (position - x) / 6;
	return [x,y];
    }
    return 0;
}

function place_piece_by_name (name,x,y,orientation) {

    place_piece(piece_index(name),x,y,orientation);
}

function piece_index (name) {
    for (var i = 0; i<PIECES.length; i++) {
	if (PIECES[i].name.toLowerCase() === name.toLowerCase()) {
	    return i;
	}
    }
    return -1;
}

function done () {
    var index = piece_index("X");
    var xy = xy_position(PIECES[index].position);
    ///console.log("index = ",index,"xy = ",xy);
    if (xy && xy[1] === 2) {
	// we're done if the range of the X piece
	// goes all the way to the exit!
	var r = piece_range(index);
	return r[1] === 4;
    }
    return false;
}
    
function place_piece (index,x,y,orientation) {

    var pos;
    PIECES[index].position = y*6+x;
    PIECES[index].orientation = orientation;
    var step = orientation ? 6 : 1;
    for (var i=0; i<PIECES[index].size; i++) {
	pos = PIECES[index].position + i * step;
	BOARD[pos] = index;
    }
}

function place_piece_by_position (index,position,orientation) {
    PIECES[index].position = position;
    PIECES[index].orientation = orientation;
    var step = orientation ? 6 : 1;
    for (var i=0; i<PIECES[index].size; i++) {
	pos = position + i * step;
	BOARD[pos] = index;
    }
}
    

function clear_piece (index) {
    var orientation = PIECES[index].orientation;
    var position = PIECES[index].position;
    var step = orientation ? 6 : 1;
    PIECES[index].position = -1;
    PIECES[index].orientation = -1;
    for (var i=0; i<PIECES[index].size; i++) {
	BOARD[position+i*step] = -1;
    }
}

function clear_board () {
    for (var i=0; i<BOARD.length; i++) {
	BOARD[i] = -1
    }
    for (var i=0; i<PIECES.length; i++) {
	PIECES[i].position = -1;
	PIECES[i].orientation = -1;
    }
}
    

function print_board () {

    for (var y=0; y < 6; y++) {
	row = "";
	for (var x=0; x < 6; x++) {
	    index = BOARD[y*6+x];
	    if (index < 0) {
		row += ". ";
	    } else {
		row += PIECES[index].name + " ";
	    }
	}
	console.log(row);
    }
}


function piece_range (index) {

    if (PIECES[index].orientation < 0) {
	return false;
    }

    ///console.log("piece = ",PIECES[index].name);

    var x = PIECES[index].position % 6;
    var y = (PIECES[index].position - x) / 6;

    ///console.log("x = ",x);
    ///console.log("y = ",y);
    ///console.log("orientation = ",PIECES[index].orientation);

    var mn=-1, mx=10;
    
    if (PIECES[index].orientation === 0) {
	///console.log("LR orientation");
	for (var i=x-1; i > -1; i--) {
	    ///console.log("trying position ",i);
	    if (!piece_fits(index,i,y)) {
		///console.log("no");
		mn = i+1;
		break;
	    }
	    ///console.log("yes");
	}
	if (mn < 0) {
	    mn = 0;
	}
	for (var i=x+1; i < 6-(PIECES[index].size-1); i++) {
	    ///console.log("trying position ",i);
	    if (!piece_fits(index,i,y)) {
		///console.log("no");
		mx = i-1;
		break;
	    }
	    ///console.log("yes");
	}
	if (mx > 6-PIECES[index].size) {
	    mx = 6-PIECES[index].size;;
	}
	return [mn,mx];
    }

    if (PIECES[index].orientation === 1) {
	for (var i=y-1; i > -1; i--) {
	    if (!piece_fits(index,x,i)) {
		mn = i+1;
		break;
	    }
	}
	if (mn < 0) {
	    mn = 0;
	}
	for (var i=y+1; i < 6-(PIECES[index].size-1); i++) {
	    if (!piece_fits(index,x,i)) {
		mx = i-1;
		break;
	    }
	}
	if (mx > 6-PIECES[index].size) {
	    mx = 6-PIECES[index].size;
	}
	return [mn,mx];
    }
}

function piece_fits (index,x,y) {
    var step = PIECES[index].orientation ? 6 : 1;
    var init = y * 6 + x;
    for (var i=0; i<PIECES[index].size; i++) {
	var position = init + i * step
	if (BOARD[position] !== -1 && BOARD[position] !== index) {
	    return false;
	}
    }
    return true;
}


function move_piece (name,d) {

    var index = piece_index(name);
    var r = piece_range(index);
    if (PIECES[index].orientation < 0) {
	return;
    }
    var r = piece_range(index);
    var position = PIECES[index].position;
    var orientation = PIECES[index].orientation;
    var xy = xy_position(position)
    var x = xy[0], y = xy[1];
    if (orientation === 0) {
	if (x+d >= r[0] && x+d <= r[1]) {
	    clear_piece(index);
	    place_piece(index,x+d,y,orientation);
	}
    } else {
	if (y+d >= r[0] && y+d <= r[1]) {
	    clear_piece(index);
	    place_piece(index,x,y+d,orientation);
	}
    }
}

function process_puzzle (descr) {
    descr.split(":").forEach(function(entry) {
	if (entry.length == 4) {
	    place_piece_by_name(entry[0],
				+entry[1]-1,
				+entry[2]-1,
				entry[3]==="r" ? 0 : 1);
	}
    });
}

function solve_puzzle () {

    var q = [[board_string()]];

    var seen = {};

    while (q.length > 0) {
	///console.log(q.length);
	path = q.shift();
	current = path[0];
	if (current in seen) {
	    continue;
	}
	recreate_board(current);
	if (done()) {
	    console.log("SOLUTION:");
	    for (var i=path.length; i>0; i--) {
		recreate_board(path[i-1]);
		print_board();
		console.log("");
	    }
	    return;
	}
	seen[current] = true;
	moves = all_moves();
	moves.forEach(function(move) {
	    move_piece(move[0],move[1]);
	    q.push([board_string()].concat(path))
	    recreate_board(current); });
    }

    console.log("No solution found");
    
}

function board_string () {
    var string = "";
    PIECES
	.forEach(function(p,i) {
	    if (p.position > -1) {
		string += ("0"+i).slice(-2) + ("0"+p.position).slice(-2) + p.orientation; } });
    ///console.log(string);
    return string;
}

function recreate_board (string) {
    clear_board();
    ///console.log("string",string);
    for (var i=0; i<string.length; i+=5) {
	///console.log("i",i,"string",string.slice(i,i+5));
	place_piece_by_position(+string.slice(i,i+2),
				+string.slice(i+2,i+4),
				+string.slice(i+4,i+5));
    }
    ///print_board();
}

function all_moves () {
    moves = [];
    PIECES
	.forEach(function(p,index) {
	    ///console.log("index",index);
	    if (p.position > -1) {
		var r = piece_range(index);
		var xy = xy_position(p.position);
		var x = xy[0], y = xy[1];
		///console.log("piece",p.name,"x",x,"y",y,"orientation",p.orientation);
		///console.log("range",r);
		if (p.orientation) {
		    ///console.log("orientation D");
		    for (var i=r[0]-y; i<r[1]+1-y; i++) {
			if (i) {
			    moves.push([p.name,i]);
			}
		    }
		} else {
		    ///console.log("orientation R");
		    for (var i=r[0]-x; i<r[1]+1-x; i++) {
			if (i) {
			    moves.push([p.name,i]);
			}
		    }
		}
	    } });
    ///console.log(moves);
    return moves;
}
	    

var Page = React.createClass({
    componentWillMount: function() { 
	initialize_board();
	process_puzzle(GAMES[0].code);
    },
    render: function() {
	return (
	    <div>
		<div className="title">
		Traffic Jam!
		</div>

	        <Game />

	        <GameMenu />
            </div>
	);
    }
});

var GameMenu = React.createClass({
    render: function() { 
	return ( <div className="menu">
                 <button>Hint</button>
                 <button>Solve</button>
                 <button>Quit</button>
                 </div>);
    }
});

var Game = React.createClass({
    render: function () { 
	var body = [<rect x="0" y="0" width="300" height="300" fill="none" stroke="#aaaaaa" />];
	for (var i=1; i<6; i++) {
	    body.push(<line x1={i*50} x2={i*50} y1="0" y2="300" stroke="#aaaaaa" />);
	    body.push(<line y1={i*50} y2={i*50} x1="0" x2="300" stroke="#aaaaaa" />);
	}
	for (var i=0; i<PIECES.length; i++) { 
	    if (PIECES[i].position > -1) {
		body.push(svgForPiece(i));
	    }
	}
	console.log(body);
	return (
		<div className="game">
		<svg width="300" height="300" viewBox="0 0 300 300">
		{body}
                </svg>
	        </div>
	);
    }
});

function svgForPiece (index) {
    var p = PIECES[index];
    if (p.position > -1) { 
	var xy = xy_position(p.position);
	var x = (xy[0]) * 50;
	var y = (xy[1]) * 50;
	if (p.orientation == 0) {
	    var width = p.size * 50 - 4;
	    var height = 50 - 4;
	} else {
	    var width = 50 - 4;
	    var height = p.size * 50 - 4;
	}
	return <rect className="piece" x={x+2} y={y+2} width={width} height={height} fill={p.color} onMouseDown={selectElement} transform="matrix(1 0 0 1 0 0)" data-x={x} data-y={y} data-index={index} />;
	    /* <text x={x+23} y={y+23} dy="0.35em" textAnchor="middle">{p.name}</text>]; */
    }
}


var selectedElement;
var index;
var currentX, currentY;
var currentMatrix;
var range;
var minR, maxR;

function selectElement (evt) {
    
    /* required on firefox to prevent dragging the whole SVG */
    if (evt.preventDefault) {
	evt.preventDefault();
    }

    selectedElement = evt.target;
    index = +selectedElement.getAttributeNS(null,"data-index");
    currentX = evt.clientX;
    currentY = evt.clientY;
    console.log("current = ",currentX,currentY);
    currentMatrix = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(' ');

    var xy = xy_position(PIECES[index].position)
    var x = xy[0];
    var y = xy[1];
    var deltaX = currentX - x*50;
    var deltaY = currentY - y*50;
    range = piece_range(index);
    if (PIECES[index].orientation == 0) { 
	/* R orientation only care about x position */
	minR = currentX - 50*(x-range[0]);
	maxR = currentX + 50*(range[1]-x);
    } else {
	minR = currentY - 50*(y-range[0]);
	maxR = currentY + 50*(range[1]-y);
    }

    console.log("range = ",range);
    console.log("min,max = ",minR,maxR);

    for (var i=0; i<currentMatrix.length; i++) {
	currentMatrix[i] = parseFloat(currentMatrix[i]);
    }
    console.log("click");
    selectedElement.addEventListener("mousemove",moveElement);
    selectedElement.addEventListener("mouseout",deselectElement);
    selectedElement.addEventListener("mouseup",deselectElement);

}

function moveElement (evt) { 
    console.log("moving!");
    var dx,dy;
    if (PIECES[index].orientation == 0) {
	if (evt.clientX < minR || evt.clientX > maxR) {
	    dx = 0;
	} else {
	    dx = evt.clientX - currentX;
	}
	dy = 0;
    } else {
	dx = 0;
	if (evt.clientY < minR || evt.clientY > maxR) { 
	    dy = 0;
	} else {
	    dy = evt.clientY - currentY;	
	}
    }
    currentMatrix[4] += dx;
    currentMatrix[5] += dy;
    var newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
    selectedElement.setAttributeNS(null, "transform", newMatrix);
    currentX = evt.clientX;
    currentY = evt.clientY;
}

function deselectElement(evt){
    if(selectedElement){
	selectedElement.removeEventListener("mousemove",moveElement);
	selectedElement.removeEventListener("mouseout",deselectElement);
	selectedElement.removeEventListener("mouseup",deselectElement);
	selectedElement = null;
	/* recompute the board */
	/* re-render? */
    }
}

ReactDOM.render(<Page />,document.getElementById("content"));

