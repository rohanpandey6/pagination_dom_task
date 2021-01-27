var total_data = data.length;
var current_pointer = 0;


var main_div = document.createElement('div');
main_div.style.border = '2px solid black';
main_div.style.padding = '10px'

var paged_data = document.createElement('div');
paged_data.setAttribute('id', 'paged_data');

var page_table = document.createElement('table');
page_table.style.margin = '0 auto';
page_table.style.borderCollapse = 'collapse';

var row = document.createElement('tr');


var first_col = document.createElement('td');

var next_button = document.createElement('button');
next_button.innerHTML='Next';
next_button.setAttribute('id','next');
next_button.addEventListener('click', function(){ clicked('next')});
first_col.append(next_button);

var second_col = document.createElement('td');

var previous_button = document.createElement('button');
previous_button.innerHTML= 'Previous';
previous_button.setAttribute('id','previous');
previous_button.addEventListener('click', function(){ clicked('previous')});
second_col.append(previous_button);

row.append(first_col, second_col);

for (var i = 0 ; i < total_data/20; i++){
	var col = document.createElement('td');
	var index_button = document.createElement('button');
	index_button.innerHTML = i+1;
	index_button.setAttribute("id", i.toString());
	(function(index){
	index_button.addEventListener('click', function(){ clicked(index)})
	})(i)
	col.append(index_button);
	row.append(col);
}


function display_data(index){
	paged_data.innerHTML = '';
	current_data = data.slice(20*index,(20*index)+20);
	var data_point = document.createElement("div");
	data_point.style.fontFamily = 'monospace';
	for (let i in current_data){
	data_point.innerHTML += "Name: " + current_data[i].name +"<br />"+ "Email: "+ current_data[i].email + " <br /> "+" <br /> "; 
	}
	paged_data.appendChild(data_point);
	current_pointer = index;
	
}

function clicked(arg){
	
	
	if (typeof(arg) == 'number'){
		var previous_selected_button = document.getElementById(current_pointer.toString());
		previous_selected_button.style.backgroundColor = '';
		display_data(arg);
		var selected_button = document.getElementById(arg.toString());
		selected_button.style.backgroundColor = '#4287f5';
	}	
	else{
		if (arg === 'next'){
			if (current_pointer < 4){
				var previous_selected_button = document.getElementById(current_pointer.toString());
				previous_selected_button.style.backgroundColor = '';
				var selected_button = document.getElementById((current_pointer+1).toString());
				selected_button.style.backgroundColor = '#4287f5';
				display_data(current_pointer+1)
				
			}
		}
		else{
			if (current_pointer > 0 ){
				var previous_selected_button = document.getElementById(current_pointer.toString());
				previous_selected_button.style.backgroundColor = '';
				var selected_button = document.getElementById((current_pointer-1).toString());
				selected_button.style.backgroundColor = '#4287f5';
				display_data(current_pointer-1)
				
			}
		}
	}
	
}

display_data(0);
main_div.append(paged_data)
page_table.append(row)
main_div.append(page_table)
document.body.append(main_div)
var selected_button = document.getElementById((current_pointer).toString());
selected_button.style.backgroundColor = '#4287f5';





