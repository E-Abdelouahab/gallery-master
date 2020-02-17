class Element {
	constructor(data,next = null,prev = null){
		this.data=data;
		this.next=next;
		this.prev=prev;
	}
}

class Stack {
	constructor(){
		this.length=0;
		this.head=null;
		this.tail=null;
		this.pointer = null;

	}

	pushToList(data){
		var element = new Element(data);
		if(this.length==0){
			this.pointer  = this.tail =  this.head  = element;
			
		}else
		{
			this.tail.next = element;
			element.prev = this.tail;
			this.tail=element;
			
		}

		this.length++;
		return element;

	}

	

	next(){
		if(this.pointer && this.pointer.next){
			this.pointer = this.pointer.next;
		}


	}

	previous(){
		if(this.pointer && this.pointer.prev){
			this.pointer = this.pointer.prev;
		}
	}

	dispElement(){
		if(this.pointer){
			return this.pointer.data;
		} else return "No Data";
	}



}


let stack = new Stack();

stack.pushToList('<img src="img/1.jpg"><h2>Naruto Soundtrack 1</h2> <audio controls src="msc/1.mp3"></audio>');
stack.pushToList('<img src="img/2.jpg"><h2>Naruto Soundtrack 2</h2> <audio controls src="msc/2.mp3"></audio>');
stack.pushToList('<img src="img/3.jpg"><h2>Naruto Soundtrack 3</h2> <audio controls src="msc/3.mp3"></audio>');
stack.pushToList('<img src="img/4.jpg"><h2>Naruto Soundtrack 4</h2> <audio controls src="msc/4.mp3"></audio>');


function Next(){
	stack.next();
	document.getElementById("res").innerHTML = stack.dispElement();
}

function Prev(){
	stack.previous();
	document.getElementById("res").innerHTML = stack.dispElement();

}

function printElement(){
	document.getElementById("res").innerHTML = stack.dispElement();
}



