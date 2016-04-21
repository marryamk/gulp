(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



// stage content:
(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0071BC").ss(3).p("AJbAAQAAEEixC5QixC5j5AAQj5AAiwi5Qixi5AAkEQAAkECxi4QCwi5D5AAQD5AACxC5QCxC4AAEEg");
	this.shape.setTransform(69,70.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A99D").s().p("AmpG9Qixi4AAkFQAAkDCxi5QCwi4D5gBQD5ABCxC4QCxC5AAEDQAAEFixC4QixC4j5AAQj5AAiwi4g");
	this.shape_1.setTransform(69,70.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0071BC").ss(3).p("ApZAFQABg1AJg0QAFgfAKgfQAJgeANgeQAdhCAqg9QAegqAkgnQAMgOANgNQA1g3A9gkQAwgdA2gSQAogNArgIQAYgEAZgCQAVgCAVAAQBfgCBVAbQAlANAYANQARAJAFACQAtAZAqAlQAjAdAgAjQAPAQANAQQA4BFAlBNQAuBjAPByQACAWABAXQACAPAAARQgBAlgEAlQgPBwg6BjQglBBg4A6QgLALgKAKQhKBHhTAoQhpAyh3ADQgJABgJAAQgwgBgrgHQgpgHgogOQhqgkhahJQgMgKgMgLQgQgOgRgQQhLhLgvhYQgVgkgNgnQAAgBAAAAQgNglgIgnQgKg2AAg7g");
	this.shape_2.setTransform(68.9,70.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A99D").s().p("AhQJqQgpgHgogOQhpgkhbhJIgXgVIghgeQhMhLgvhYQgVgkgMgnIgBgBQgNglgIgnQgKg2AAg7IAAgEQABg1AJg0QAGgfAJgfQAJgeANgeQAdhCAqg9QAegqAkgnIAZgbQA1g3A+gkQAwgdA1gSQAogNAsgIQAXgEAZgCQAVgCAWAAQBegCBVAbQAlANAZANIAVALQAtAZAqAlQAiAdAhAjIAcAgQA4BFAlBNQAuBjAOByQAEAWABAXIABAgQgBAlgFAlQgOBwg6BjQglBBg4A6IgVAVQhJBHhUAoQhpAyh3ADIgSABQgwgBgrgHg");
	this.shape_3.setTransform(68.9,70.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0071BC").ss(3).p("ApYALQABg1AKgzQAGggALgdQAKgeAOgcQAhhAApg7QAegqAjgoQAMgOALgNQAzg6A7gkQAvgeA0gTQAogPAqgIQAYgFAZgCQAUgCAVgBQBfgFBUAcQAlAOAYANQAQAJAFADQArAZAoAnQAhAeAfAjQAPAQANARQA2BFAmBLQAvBhAWBuQAEAWACAWQACAOAAAQQACAlgDAkQgMBvg7BkQglBAg4A6QgLALgKAKQhJBHhSAoQhpA0h2ACQgJABgJAAQgwgBgqgJQgogHgngQQhognhahIQgMgKgMgKQgRgOgQgQQhLhHg1hTQgWgjgOgmQAAAAAAgBQgPgigIgnQgLg2AAg7g");
	this.shape_4.setTransform(68.7,69.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A99D").s().p("AhIJkQgogHgngQQhognhahIIgYgUIghgeQhLhHg1hTQgWgjgOgmIAAgBQgPgigIgnQgLg2AAg7IAAgDQABg1AKgzQAGggALgdQAKgeAOgcQAhhAApg7QAegqAjgoIAXgbQAzg6A7gkQAvgeA0gTQAogPAqgIQAYgFAZgCIApgDQBfgFBUAcQAlAOAYANIAVAMQArAZAoAnQAhAeAfAjIAcAhQA2BFAmBLQAvBhAWBuQAEAWACAWIACAeQACAlgDAkQgMBvg7BkQglBAg4A6IgVAVQhJBHhSAoQhpA0h2ACIgSABQgwgBgqgJg");
	this.shape_5.setTransform(68.7,69.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0071BC").ss(3).p("ApYAQQABg1AMgyQAGgfAMgdQALgcAPgcQAkg+Apg5QAegpAhgqQAMgOALgNQAwg7A5gmQAtgeA0gVQAmgPAqgJQAYgFAYgDQAVgDAUgBQBfgHBTAcQAlAOAXAOQAQAKAFADQApAZAnApQAfAfAeAjQAOARANAQQA1BGAnBKQAwBeAcBqQAGAVADAVQADAOABAQQADAjgCAlQgJBtg7BkQgmBAg4A7QgKALgLAKQhJBHhRAoQhoA1h1ACQgJAAgJAAQgwgCgpgJQgngIgngSQhmgqhZhGQgMgKgMgKQgRgOgRgOQhLhFg5hPQgZghgOgkQgBAAAAgBQgQghgJgnQgMg1ABg6g");
	this.shape_6.setTransform(68.7,69.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A99D").s().p("AAYJqQgwgCgpgJQgngIgngSQhmgqhZhGIgYgUIgigcQhLhFg5hPQgZghgOgkIgBgBQgQghgJgnQgMg1ABg6IAAgEQABg1AMgyQAGgfAMgdQALgcAPgcQAkg+Apg5QAegpAhgqIAXgbQAwg7A5gmQAtgeA0gVQAmgPAqgJQAYgFAYgDQAVgDAUgBQBfgHBTAcQAlAOAXAOIAVANQApAZAnApQAfAfAeAjIAbAhQA1BGAnBKQAwBeAcBqQAGAVADAVQADAOABAQQADAjgCAlQgJBtg7BkQgmBAg4A7IgVAVQhJBHhRAoQhoA1h1ACIgJAAIgJAAg");
	this.shape_7.setTransform(68.7,69.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0071BC").ss(3).p("ApYAWQABg1AMgyQAIgeAMgcQANgcAQgaQAng8Apg4QAegoAggqQAKgPALgOQAtg9A3gmQAsgfAzgWQAmgQApgKQAXgFAZgEQAUgDAUgCQBegIBTAcQAkAOAXAOQAQALAFADQAnAZAlArQAeAhAdAjQANARANAQQAzBGApBJQAxBcAiBmQAHAUAEAVQAEANACAPQAFAjgBAkQgHBsg8BlQglA/g5A7QgKALgKAKQhKBIhPAoQhpA1hzACQgJAAgJAAQgvgCgpgLQgmgJgmgTQhlgthYhFQgMgJgMgKQgRgNgSgPQhKhBg+hLQgbgggPghQAAgBgBAAQgRghgKgmQgMg0ABg7g");
	this.shape_8.setTransform(68.7,68.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A99D").s().p("AAdJnQgvgCgpgLQgmgJgmgTQhlgthYhFIgYgTIgjgcQhKhBg+hLQgbgggPghIgBgBQgRghgKgmQgMg0ABg7IAAgDQABg1AMgyQAIgeAMgcQANgcAQgaQAng8Apg4IA+hSIAVgdQAtg9A3gmQAsgfAzgWQAmgQApgKQAXgFAZgEQAUgDAUgCQBegIBTAcQAkAOAXAOIAVAOQAnAZAlArQAeAhAdAjIAaAhQAzBGApBJQAxBcAiBmQAHAUAEAVIAGAcQAFAjgBAkQgHBsg8BlQglA/g5A7IgUAVQhKBIhPAoQhpA1hzACIgSAAg");
	this.shape_9.setTransform(68.7,68.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0071BC").ss(3).p("ApYAcQABg1AOgyQAIgdAOgcQAMgbASgZQAqg5Aog3QAfgoAegrQAKgOAKgPQArg/A1gmQAqghAygXQAlgQAqgLQAWgGAYgEQAUgEAVgCQBegKBSAcQAkAOAWAPQAQALAEAEQAlAZAkAtQAdAiAbAjQANARAMARQAyBFAqBIQAyBaApBjQAIATAFAUQAFANACAOQAHAiAAAkQgEBqg9BmQglA+g4A8QgLALgKAKQhKBIhNAoQhpA3hyABQgJAAgJgBQgvgCgogMQglgJgmgVQhjgxhYhCQgMgKgMgJQgRgNgSgOQhLg+hChHQgcgegRggQAAgBAAAAQgTgfgKgmQgOg0ACg7g");
	this.shape_10.setTransform(68.6,68.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A99D").s().p("AAjJjQgvgCgogMQglgJgmgVQhjgxhYhCIgYgTIgjgbQhLg+hChHQgcgegRggIAAgBQgTgfgKgmQgOg0ACg7IAAgCQABg1AOgyQAIgdAOgcQAMgbASgZIBShwQAfgoAegrIAUgdQArg/A1gmQAqghAygXQAlgQAqgLQAWgGAYgEQAUgEAVgCQBegKBSAcQAkAOAWAPIAUAPQAlAZAkAtQAdAiAbAjIAZAiQAyBFAqBIQAyBaApBjQAIATAFAUQAFANACAOQAHAiAAAkQgEBqg9BmQglA+g4A8IgVAVQhKBIhNAoQhpA3hyABIgSgBg");
	this.shape_11.setTransform(68.6,68.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0071BC").ss(3).p("ApZAhQACg1APgxQAIgdAPgbQAOgaASgYQAtg3Aog2QAfgnAdgsQAKgOAJgPQAohBAzgnQApgiAxgXQAlgSAogLQAXgHAYgEQAUgFAUgCQBegMBRAcQAkAPAWAPQAPAMAEADQAjAaAjAvQAcAjAZAiQANASAMARQAwBGArBHQAzBXAwBfQAJATAFATQAGAMADAOQAJAhAAAkQgBBpg+BnQgkA9g5A8QgKAKgLALQhJBIhNAoQhoA4hxAAQgJAAgIAAQgwgDgngMQgkgLgmgWQhhg0hYhBQgMgJgMgJQgRgNgSgNQhKg8hHhDQgegcgSgeQAAgBAAAAQgUgegLgmQgPgzACg6g");
	this.shape_12.setTransform(68.6,68);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A99D").s().p("AApJgQgwgDgngMQgkgLgmgWQhhg0hYhBIgYgSIgjgaQhKg8hHhDQgegcgSgeIAAgBQgUgegLgmQgPgzACg6IAAgDQACg1APgxQAIgdAPgbQAOgaASgYQAtg3Aog2QAfgnAdgsIATgdQAohBAzgnQApgiAxgXQAlgSAogLQAXgHAYgEQAUgFAUgCQBegMBRAcQAkAPAWAPIATAPQAjAaAjAvQAcAjAZAiIAZAjQAwBGArBHQAzBXAwBfQAJATAFATQAGAMADAOQAJAhAAAkQgBBpg+BnQgkA9g5A8IgVAVQhJBIhNAoQhoA4hxAAIgRAAg");
	this.shape_13.setTransform(68.6,68);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0071BC").ss(3).p("ApZAmQACg0AQgxQAJgcAPgaQAPgaAUgXQAwg1Ang1QAfgnAbgsQAKgOAIgPQAnhDAwgoQAogiAwgZQAkgSAogNQAXgHAXgFQAUgEAUgDQBegOBQAcQAkAPAWAQQAOAMAEAEQAhAZAiAyQAaAkAZAiQAMASALARQAwBGAsBGQA0BVA1BcQAKASAHASQAHAMADANQALAgABAlQABBmg/BpQgjA8g6A8QgKALgKAKQhKBJhLAoQhpA5hvAAQgJgBgIAAQgvgDgogOQgigLgmgXQhfg4hYg/QgMgJgMgJQgRgMgSgNQhLg5hKg/QghgbgSgdIAAAAQgWgdgLglQgQgzADg6g");
	this.shape_14.setTransform(68.6,67.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A99D").s().p("AAuJdQgvgDgogOQgigLgmgXQhfg4hYg/IgYgSIgjgZQhLg5hKg/QghgbgSgdIAAAAQgWgdgLglQgQgzADg6IAAgDQACg0AQgxQAJgcAPgaQAPgaAUgXQAwg1Ang1QAfgnAbgsIASgdQAnhDAwgoQAogiAwgZQAkgSAogNQAXgHAXgFQAUgEAUgDQBegOBQAcQAkAPAWAQIASAQQAhAZAiAyIAzBGIAXAjQAwBGAsBGQA0BVA1BcQAKASAHASQAHAMADANQALAgABAlQABBmg/BpQgjA8g6A8IgUAVQhKBJhLAoQhpA5hvAAIgRgBg");
	this.shape_15.setTransform(68.6,67.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0071BC").ss(3).p("ApaAsQACg1ARgwQAJgcARgZQAQgZAUgWQAzg0AngzQAfgmAagtQAJgPAIgPQAkhFAvgoQAmgjAwgaQAjgTAogNQAWgIAXgFQAUgFATgDQBegQBQAdQAkAPAVAQQAOANAEAEQAgAZAgAzQAZAmAXAiQAMATALAQQAuBGAuBFQA0BTA7BZQAMARAHARQAIAMAEANQAMAfACAkQAEBlhABpQgjA8g6A9QgKAKgKAKQhKBJhKApQhpA6htgBQgJAAgJgBQgxgDglgPQghgLglgaQheg6hXg+QgMgIgMgJQgSgMgTgNQhKg1hOg8QgjgZgSgcIgBAAQgWgcgNglQgQgyADg6g");
	this.shape_16.setTransform(68.7,67.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A99D").s().p("ABEJbIgSgBQgxgDglgPQghgLglgaQheg6hXg+IgYgRIglgZQhKg1hOg8QgjgZgSgcIgBAAQgWgcgNglQgQgyADg6IAAgCQACg1ARgwQAJgcARgZQAQgZAUgWQAzg0AngzQAfgmAagtIARgeQAkhFAvgoQAmgjAwgaQAjgTAogNQAWgIAXgFQAUgFATgDQBegQBQAdQAkAPAVAQIASARQAgAZAgAzIAwBIIAXAjIBcCLQA0BTA7BZQAMARAHARQAIAMAEANQAMAfACAkQAEBlhABpQgjA8g6A9IgUAUQhKBJhKApQhnA5hrAAIgEAAg");
	this.shape_17.setTransform(68.7,67.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0071BC").ss(3).p("ApbAxQADg0ASgwQAKgcARgZQARgXAVgVQA2gyAngyQAegmAagtQAIgPAIgQQAhhGAtgpQAlgkAvgbQAjgTAngPQAWgHAXgGQATgGAUgDQBegSBOAdQAkAPAVARQAOANAEAEQAdAaAfA1QAYAmAXAjQALATAKAQQAtBGAvBEQA1BRBBBVQANARAIARQAIALAFAMQAOAeADAlQAFBkhABqQgjA6g6A9QgJALgLAKQhKBJhIApQhpA7htgCQgIAAgJgBQgxgDgkgQQgggMgmgbQhcg9hXg8QgMgJgMgIQgRgMgTgMQhKgzhTg4QgkgYgTgZQgBgBAAAAQgYgbgNgkQgRgyADg6g");
	this.shape_18.setTransform(68.7,66.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A99D").s().p("ABIJYIgRgBQgxgDgkgQQgggMgmgbQhcg9hXg8IgYgRIgkgYIidhrQgkgYgTgZIgBgBQgYgbgNgkQgRgyADg6IAAgCQADg0ASgwQAKgcARgZQARgXAVgVQA2gyAngyQAegmAagtIAQgfQAhhGAtgpQAlgkAvgbQAjgTAngPQAWgHAXgGQATgGAUgDQBegSBOAdQAkAPAVARIASARQAdAaAfA1IAvBJIAVAjQAtBGAvBEQA1BRBBBVQANARAIARQAIALAFAMQAOAeADAlQAFBkhABqQgjA6g6A9IgUAVQhKBJhIApQhnA5hpAAIgGAAg");
	this.shape_19.setTransform(68.7,66.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0071BC").ss(3).p("ApbA2QADg2ASguQALgbATgYQAQgXAXgUQA5gwAmgxQAfgmAYgtQAIgQAHgPQAfhIArgqQAkglAugcQAigUAngPQAWgIAXgGQATgGATgDQBegUBOAdQAjAQAVARQAOAOAEADQAbAaAeA3QAXAnAVAjQALATAKAQQAsBHAwBDQA1BOBHBTQAOAQAJAQQAJAKAFAMQAPAeAEAkQAIBjhBBqQgjA7g5A9QgKAKgLAKQhKBKhHAoQhpA8hrgCQgJAAgIgBQgxgEgkgQQgfgNglgcQhbhAhWg7QgMgIgMgIQgSgLgTgMQhKgxhXg0QgmgXgTgYQgBAAAAgBQgZgZgOglQgRgwADg7g");
	this.shape_20.setTransform(68.7,66.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A99D").s().p("ABNJVIgRgBQgxgEgkgQQgfgNglgcQhbhAhWg7IgYgQIglgXQhKgxhXg0QgmgXgTgYIgBgBQgZgZgOglQgRgwADg7IAAgBQADg2ASguQALgbATgYQAQgXAXgUQA5gwAmgxQAfgmAYgtIAPgfQAfhIArgqQAkglAugcQAigUAngPQAWgIAXgGQATgGATgDQBegUBOAdQAjAQAVARIASARQAbAaAeA3IAsBKIAVAjQAsBHAwBDQA1BOBHBTQAOAQAJAQQAJAKAFAMQAPAeAEAkQAIBjhBBqQgjA7g5A9IgVAUQhKBKhHAoQhmA6hoAAIgGAAg");
	this.shape_21.setTransform(68.7,66.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0071BC").ss(3).p("ApcA6QADg2AUgsQALgbATgYQASgWAYgUQA6gtAngwQAfglAXgvQAHgPAHgQQAdhKApgpQAjgnAtgcQAhgVAngQQAVgIAXgHQATgGATgEQBegWBNAeQAkAQAUASQANAOAEAEQAaAZAcA5QAWAoAUAjQALATAKARQAqBGAxBDQA3BMBMBPQAOAQAKAPQAKAKAGALQARAdAEAlQALBhhCBrQgjA6g6A9QgKAKgKALQhKBKhGAoQhpA9hqgCQgJgBgIAAQgxgFgjgRQgegNglgeQhahDhWg5QgMgIgMgIQgRgLgUgLQhKgvhagxQgogVgUgWQgBgBAAAAQgagZgOgkQgTgwAEg6g");
	this.shape_22.setTransform(68.7,66.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A99D").s().p("ABRJTIgRgBQgxgFgjgRQgegNglgeQhahDhWg5IgYgQIglgWQhKgvhagxQgogVgUgWIgBgBQgagZgOgkQgTgwAEg6IAAgCQADg2AUgsQALgbATgYQASgWAYgUQA6gtAngwQAfglAXgvIAOgfQAdhKApgpQAjgnAtgcQAhgVAngQQAVgIAXgHQATgGATgEQBegWBNAeQAkAQAUASIARASQAaAZAcA5IAqBLIAVAkQAqBGAxBDQA3BMBMBPQAOAQAKAPQAKAKAGALQARAdAEAlQALBhhCBrQgjA6g6A9IgUAVQhKBKhGAoQhlA7hmAAIgIAAg");
	this.shape_23.setTransform(68.7,66.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0071BC").ss(3).p("ApdA/QAEg2AUgsQAMgbAUgXQATgVAYgTQA+gsAmguQAfglAVgvQAIgQAGgQQAbhLAngqQAignAsgeQAhgVAmgRQAVgJAXgHQATgGATgEQBdgYBNAeQAjAQAUASQANAPAEAEQAYAaAbA6QAVApATAjQALATAJARQApBHAyBBQA3BKBSBNQAQAPAKAOQALAKAGALQASAcAGAlQAMBfhCBsQgjA5g6A+QgJAKgLAKQhKBLhFAoQhpA+hpgDQgIAAgJgBQgwgFgjgSQgdgOglgfQhYhFhWg4QgMgIgMgIQgRgKgUgLQhKgsheguQgpgUgVgVQgBAAAAAAQgcgYgOgkQgTgvADg7g");
	this.shape_24.setTransform(68.7,65.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A99D").s().p("ABVJQIgRgBQgwgFgjgSQgdgOglgfQhYhFhWg4IgYgQIglgVQhKgsheguQgpgUgVgVIgBAAQgcgYgOgkQgTgvADg7IAAgBQAEg2AUgsQAMgbAUgXQATgVAYgTQA+gsAmguQAfglAVgvQAIgQAGgQQAbhLAngqQAignAsgeQAhgVAmgRQAVgJAXgHQATgGATgEQBdgYBNAeQAjAQAUASIARATQAYAaAbA6IAoBMIAUAkQApBHAyBBQA3BKBSBNQAQAPAKAOQALAKAGALQASAcAGAlQAMBfhCBsQgjA5g6A+IgUAUQhKBLhFAoQhlA8hjAAIgKgBg");
	this.shape_25.setTransform(68.7,65.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#0071BC").ss(3).p("ApeBEQAEg2AWgsQAMgaAVgXQATgUAZgSQBAgrAmgtQAfgkAVgwQAGgQAGgQQAZhNAlgrQAignArgfQAggWAmgRQAVgJAXgIQASgGATgFQBegZBMAeQAjAQATATQANAPAEAEQAWAaAaA8QAUAqASAjQAKAUAJAQQAoBHAzBAQA4BJBXBJQARAPALAOQALAKAHAKQAUAbAGAlQAOBehDBtQgiA4g6A+QgKAKgKAKQhKBLhEApQhqA+hngDQgJgBgIAAQgwgGgjgTQgcgOglggQhWhIhVg3QgMgIgMgHQgSgKgVgLQhJgphigrQgqgSgWgUQgBAAAAgBQgdgWgPgkQgUgvAEg6g");
	this.shape_26.setTransform(68.8,65.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A99D").s().p("ABZJOIgRgBQgwgGgjgTQgcgOglggQhWhIhVg3IgYgPIgngVQhJgphigrQgqgSgWgUIgBgBQgdgWgPgkQgUgvAEg6IAAgBQAEg2AWgsQAMgaAVgXQATgUAZgSQBAgrAmgtQAfgkAVgwIAMggQAZhNAlgrQAignArgfQAggWAmgRQAVgJAXgIQASgGATgFQBegZBMAeQAjAQATATIARATQAWAaAaA8QAUAqASAjIATAkQAoBHAzBAQA4BJBXBJQARAPALAOQALAKAHAKQAUAbAGAlQAOBehDBtQgiA4g6A+IgUAUQhKBLhEApQhkA7hiAAIgLAAg");
	this.shape_27.setTransform(68.8,65.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#0071BC").ss(3).p("ApeBIQADg2AXgrQAMgaAWgWQAUgUAagRQBDgoAlgtQAfgkAUgwQAGgQAFgRQAXhOAkgrQAggoArggQAggWAlgSQAVgKAWgHQATgIASgEQBegbBLAeQAjAQATAUQANAPADAEQAVAaAZA+QATArARAjQAKAUAJAQQAnBHA0BAQA4BHBcBGQASAOAMANQAMALAHAIQAVAbAHAlQAQBchDBuQgiA4g7A+QgJAKgLALQhKBLhDAoQhpBAhmgEQgJgBgJgBQgwgFgigUQgbgPgkghQhWhLhUg1QgMgIgMgHQgSgKgVgKQhJgnhlgoQgtgRgWgSQgBgBAAAAQgegWgPgjQgVguAFg7g");
	this.shape_28.setTransform(68.8,65.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A99D").s().p("ABdJMIgSgCQgwgFgigUQgbgPgkghQhWhLhUg1IgYgPQgSgKgVgKQhJgnhlgoQgtgRgWgSIgBgBQgegWgPgjQgVguAFg7IAAgBQADg2AXgrQAMgaAWgWQAUgUAagRQBDgoAlgtQAfgkAUgwQAGgQAFgRQAXhOAkgrQAggoArggQAggWAlgSQAVgKAWgHQATgIASgEQBegbBLAeQAjAQATAUIAQATQAVAaAZA+QATArARAjIATAkQAnBHA0BAQA4BHBcBGQASAOAMANQAMALAHAIQAVAbAHAlQAQBchDBuQgiA4g7A+IgUAVQhKBLhDAoQhjA8hgAAIgMAAg");
	this.shape_29.setTransform(68.8,65.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#0071BC").ss(3).p("ApfBNQAEg2AXgrQANgZAXgWQAUgTAbgQQBFgnAlgsQAfgjATgxQAGgQAEgRQAVhQAjgrQAfgqAqggQAfgXAmgSQAUgKAWgIQASgIATgFQBdgcBLAeQAjARATATQAMAQADAFQAUAZAYBAQARAsARAiQAJAVAJAQQAmBIA1A+QA5BFBgBEQATANANANQAMALAIAHQAWAaAIAlQASBchEBuQgiA3g6A+QgKAKgKALQhLBLhBApQhqBAhlgEQgIgBgJgBQgwgGghgUQgbgPgkgjQhUhNhVg0QgMgIgMgHQgSgKgVgJQhJglhoglQgugQgXgRIgBAAQgfgVgQgjQgVguAFg6g");
	this.shape_30.setTransform(68.9,64.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00A99D").s().p("ABgJKIgRgCQgwgGghgUQgbgPgkgjQhUhNhVg0IgYgPQgSgKgVgJQhJglhoglQgugQgXgRIgBAAQgfgVgQgjQgVguAFg6IAAgBQAEg2AXgrQANgZAXgWQAUgTAbgQQBFgnAlgsQAfgjATgxQAGgQAEgRQAVhQAjgrQAfgqAqggQAfgXAmgSQAUgKAWgIQASgIATgFQBdgcBLAeQAjARATATIAPAVQAUAZAYBAQARAsARAiIASAlQAmBIA1A+QA5BFBgBEQATANANANQAMALAIAHQAWAaAIAlQASBchEBuQgiA3g6A+IgUAVQhLBLhBApQhjA8heAAIgOAAg");
	this.shape_31.setTransform(68.9,64.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#0071BC").ss(3).p("ApgBRQAFg2AXgqQAOgZAYgVQAUgTAdgQQBGglAlgqQAfgkASgxQAGgQAEgRQAThRAhgsQAegqAqghQAegYAlgTQAUgKAWgJQATgHASgGQBdgeBKAfQAjAQATAVQAMAQADAEQASAaAXBBQARAtAPAjQAJAUAIARQAlBHA2A+QA6BDBlBBQATANAOAMQANALAIAHQAYAZAIAlQAVBahFBvQgiA3g6A+QgKAKgKALQhLBMhBAoQhpBBhkgEQgJgBgIgBQgwgGgjgWQgYgPgkgkQhShQhVgyQgMgIgMgGQgSgKgVgKQhJgihsgiQgvgPgYgQIAAAAQgggUgRgjQgVgtAEg7g");
	this.shape_32.setTransform(68.9,64.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A99D").s().p("ABkJIIgRgCQgwgGgjgWQgYgPgkgkQhShQhVgyIgYgOQgSgKgVgKQhJgihsgiQgvgPgYgQIAAAAQgggUgRgjQgVgtAEg7IAAAAQAFg2AXgqQAOgZAYgVQAUgTAdgQQBGglAlgqQAfgkASgxQAGgQAEgRQAThRAhgsQAegqAqghQAegYAlgTQAUgKAWgJQATgHASgGQBdgeBKAfQAjAQATAVIAPAUQASAaAXBBQARAtAPAjIARAlQAlBHA2A+QA6BDBlBBQATANAOAMQANALAIAHQAYAZAIAlQAVBahFBvQgiA3g6A+IgUAVQhLBMhBAoQhiA9heAAIgNAAg");
	this.shape_33.setTransform(68.9,64.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0071BC").ss(3).p("AphBVQAFg2AZgqQANgZAZgUQAVgSAdgPQBJgkAlgpQAfgjARgyQAFgQAEgSQARhSAggsQAdgrApgiQAegYAkgUQAUgKAWgJQASgIASgGQBegfBJAeQAjARASAVQAMAQADAFQARAaAWBDQAQAtAOAjQAJAUAIARQAkBIA2A9QA7BBBpA/QAVAMAOALQAOALAIAGQAZAaAJAkQAWBZhFBwQghA2g7A/QgKAKgKAKQhLBMg/ApQhqBChjgGQgIAAgJgBQgwgHgigWQgXgQgkglQhRhShVgxQgMgIgMgGQgRgJgWgKQhJgghvgfQgxgOgYgOQAAAAAAgBQghgTgRgiQgXgtAFg7g");
	this.shape_34.setTransform(68.9,64.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00A99D").s().p("ABnJFIgRgBQgwgHgigWQgXgQgkglQhRhShVgxIgYgOIgngTQhJgghvgfQgxgOgYgOIAAgBQghgTgRgiQgXgtAFg7IAAAAQAFg2AZgqQANgZAZgUQAVgSAdgPQBJgkAlgpQAfgjARgyQAFgQAEgSQARhSAggsQAdgrApgiQAegYAkgUQAUgKAWgJQASgIASgGQBegfBJAeQAjARASAVIAPAVQARAaAWBDQAQAtAOAjIARAlQAkBIA2A9QA7BBBpA/QAVAMAOALQAOALAIAGQAZAaAJAkQAWBZhFBwQghA2g7A/IgUAUQhLBMg/ApQhiA9hbAAIgQgBg");
	this.shape_35.setTransform(68.9,64.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0071BC").ss(3).p("AphBZQAEg2AagqQAOgYAZgUQAWgRAegPQBLgiAkgoQAfgjAQgyQAFgRAEgRQAPhUAegtQAcgrApgiQAegZAkgUQAUgMAVgJQASgIASgGQBdggBKAeQAiARASAVQAMARADAFQAPAaAVBEQAPAuAOAjQAIAVAIAQQAjBIA3A8QA7BABuA9QAVAMAPAKQAOAKAKAGQAZAZAKAkQAYBYhGBxQghA1g7A/QgJAKgLALQhKBMg/AoQhqBDhigGQgIAAgJgBQgvgHgjgXQgWgRgkglQhQhUhUgxQgMgHgMgGQgRgKgWgIQhJgfhygcQgygMgZgOQAAAAgBgBQghgSgSgiQgXgtAGg6g");
	this.shape_36.setTransform(69,63.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00A99D").s().p("ABqJDIgRgBQgvgHgjgXQgWgRgkglQhQhUhUgxIgYgNQgRgKgWgIQhJgfhygcQgygMgZgOIgBgBQghgSgSgiQgXgtAGg6QAEg2AagqQAOgYAZgUQAWgRAegPQBLgiAkgoQAfgjAQgyQAFgRAEgRQAPhUAegtQAcgrApgiQAegZAkgUQAUgMAVgJQASgIASgGQBdggBKAeQAiARASAVIAPAWQAPAaAVBEQAPAuAOAjQAIAVAIAQQAjBIA3A8QA7BABuA9QAVAMAPAKQAOAKAKAGQAZAZAKAkQAYBYhGBxQghA1g7A/IgUAVQhKBMg/AoQhhA+hbAAIgQgBg");
	this.shape_37.setTransform(69,63.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#0071BC").ss(3).p("AJdA+QAaBXhHBxQgmA+hKBLQhKBMg+ApQhqBDhhgGQgIgBgJgBQgugGgjgYQgBgBgBAAQgUgQgjgnQhPhWhUgwQgMgHgMgGQhNgmiYghQg0gMgZgMQAAAAgBgBQgigRgSgiQgYgsAGg7QAFg1AagqQAOgYAagTQAXgRAegOQBNghAkgnQAqguAMhKQAOhVAdgtQAbgsAogjQAdgZAkgVQAUgLAVgKQB0g2BWAkQAFADAFACQAYANASAVQAEAGAEAGQADAFADAFQAOAaAUBGQAWBLAVAsQAiBIA4A7QA8A/ByA6QArAWATAPQAbAYAKAkg");
	this.shape_38.setTransform(69,63.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00A99D").s().p("ABtJBIgRgCQgugGgjgYIgCgBQgUgQgjgnQhPhWhUgwIgYgNQhNgmiYghQg0gMgZgMIgBgBQgigRgSgiQgYgsAGg7QAFg1AagqQAOgYAagTQAXgRAegOQBNghAkgnQAqguAMhKQAOhVAdgtQAbgsAogjQAdgZAkgVQAUgLAVgKQB0g2BWAkIAKAFQAYANASAVIAIAMIAGAKQAOAaAUBGQAWBLAVAsQAiBIA4A7QA8A/ByA6QArAWATAPQAbAYAKAkQAaBXhHBxQgmA+hKBLQhKBMg+ApQhhA+haAAIgQgBg");
	this.shape_39.setTransform(69,63.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#0071BC").ss(3).p("AphBWQAEg1AZgqQAOgZAZgUQAWgSAdgPQBKgjAkgpQAggjAQgyQAFgQAEgSQAQhTAfgsQAdgrApgiQAegYAkgUQAUgLAWgJQASgIASgGQBdggBKAfQAiARASAVQAMAQADAFQAQAaAWBDQAPAuAPAjQAIAUAIARQAjBIA4A8QA6BBBrA+QAVAMAPALQAOAKAIAHQAaAZAJAkQAXBZhGBwQghA2g7A+QgJAKgLALQhKBMhAApQhpBChjgGQgIAAgJgBQgwgHgigWQgXgRgkglQhRhShTgyQgMgHgMgGQgSgKgWgJQhJgfhwgeQgxgNgYgPQgBAAAAAAQghgTgSgiQgWgtAFg6g");
	this.shape_40.setTransform(69,64);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00A99D").s().p("ABoJEIgRgBQgwgHgigWQgXgRgkglQhRhShTgyIgYgNQgSgKgWgJQhJgfhwgeQgxgNgYgPIgBAAQghgTgSgiQgWgtAFg6IAAgBQAEg1AZgqQAOgZAZgUQAWgSAdgPQBKgjAkgpQAggjAQgyIAJgiQAQhTAfgsQAdgrApgiQAegYAkgUQAUgLAWgJQASgIASgGQBdggBKAfQAiARASAVIAPAVQAQAaAWBDQAPAuAPAjQAIAUAIARQAjBIA4A8QA6BBBrA+QAVAMAPALQAOAKAIAHQAaAZAJAkQAXBZhGBwQghA2g7A+IgUAVQhKBMhAApQhhA9hbAAIgQgBg");
	this.shape_41.setTransform(69,64);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#0071BC").ss(3).p("ApgBQQAFg1AXgrQAOgZAXgVQAVgTAcgQQBHglAlgqQAfgkASgxQAFgQAFgRQAThRAhgsQAegqAqghQAegYAlgSQAVgLAWgIQASgIASgFQBegeBKAeQAjARASAUQAMAQADAFQATAaAXBBQAQAsAQAjQAJAUAIARQAlBHA2A+QA6BEBkBBQAUANANAMQANAKAJAIQAXAZAIAlQAUBahEBvQgiA3g7A+QgJALgLAKQhKBMhBAoQhpBBhkgEQgJgBgIgBQgwgGgjgWQgYgPgkgkQhThPhUgzQgMgHgMgHQgSgKgVgJQhKgjhrgiQgvgPgYgQQAAAAgBgBQgfgUgRgiQgVguAEg6g");
	this.shape_42.setTransform(68.9,64.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00A99D").s().p("ABkJIIgRgCQgwgGgjgWQgYgPgkgkQhThPhUgzIgYgOIgngTQhKgjhrgiQgvgPgYgQIgBgBQgfgUgRgiQgVguAEg6IAAgBQAFg1AXgrQAOgZAXgVQAVgTAcgQQBHglAlgqQAfgkASgxIAKghQAThRAhgsQAegqAqghQAegYAlgSQAVgLAWgIQASgIASgFQBegeBKAeQAjARASAUIAPAVQATAaAXBBQAQAsAQAjIARAlQAlBHA2A+QA6BEBkBBQAUANANAMQANAKAJAIQAXAZAIAlQAUBahEBvQgiA3g7A+IgUAVQhKBMhBAoQhjA9hdAAIgNAAg");
	this.shape_43.setTransform(68.9,64.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#0071BC").ss(3).p("ApfBKQAEg2AXgrQANgZAWgWQAUgUAbgQQBEgoAlgsQAfgkATgwQAGgQAFgRQAWhPAjgrQAggpArggQAfgXAlgSQAVgKAWgIQASgHATgFQBdgbBLAeQAjAQATAUQANAPADAFQAUAaAZA+QASAsARAiQAJAUAJARQAmBHA1A/QA5BGBeBFQASAOAMANQANALAHAHQAWAbAHAkQASBdhEBuQgiA3g7A+QgJAKgLALQhKBLhCAoQhqBBhlgFQgJAAgIgBQgwgGgigUQgbgPgkgiQhVhMhVg1QgMgHgMgHQgRgKgVgKQhKgmhmgmQgugRgWgRQgBAAAAgBQgegVgQgjQgVguAEg7g");
	this.shape_44.setTransform(68.8,64.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00A99D").s().p("ABfJKIgRgBQgwgGgigUQgbgPgkgiQhVhMhVg1IgYgOQgRgKgVgKQhKgmhmgmQgugRgWgRIgBgBQgegVgQgjQgVguAEg7IAAgBQAEg2AXgrQANgZAWgWQAUgUAbgQQBEgoAlgsQAfgkATgwIALghQAWhPAjgrQAggpArggQAfgXAlgSQAVgKAWgIQASgHATgFQBdgbBLAeQAjAQATAUIAQAUQAUAaAZA+QASAsARAiIASAlQAmBHA1A/QA5BGBeBFQASAOAMANQANALAHAHQAWAbAHAkQASBdhEBuQgiA3g7A+IgUAVQhKBLhCAoQhjA9hfAAIgNgBg");
	this.shape_45.setTransform(68.8,64.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#0071BC").ss(3).p("ApeBFQAEg2AWgsQAMgaAVgWQATgVAagRQBBgqAlgtQAfglAVgvQAGgQAGgRQAYhNAmgrQAggnAsgfQAggWAmgRQAVgKAWgHQATgHASgFQBegZBMAdQAjARATATQANAPAEAEQAWAaAaA9QATAqASAiQAKAUAJARQAoBHAzBAQA4BIBYBJQARAOALAOQAMAKAHAJQATAcAHAkQAPBehDBtQgiA4g7A+QgJALgLAKQhKBLhEAoQhpA/hngDQgJgBgIgBQgwgFgjgTQgcgPgkggQhWhJhWg2QgMgIgMgHQgRgLgVgKQhJgphjgqQgrgSgWgTQAAAAgBgBQgcgWgQgkQgUgvAEg6g");
	this.shape_46.setTransform(68.8,65.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00A99D").s().p("ABaJOIgRgCQgwgFgjgTQgcgPgkggQhWhJhWg2IgYgPIgmgVQhJgphjgqQgrgSgWgTIgBgBQgcgWgQgkQgUgvAEg6IAAgBQAEg2AWgsQAMgaAVgWQATgVAagRQBBgqAlgtQAfglAVgvIAMghQAYhNAmgrQAggnAsgfQAggWAmgRQAVgKAWgHQATgHASgFQBegZBMAdQAjARATATIARATQAWAaAaA9QATAqASAiIATAlQAoBHAzBAQA4BIBYBJQARAOALAOQAMAKAHAJQATAcAHAkQAPBehDBtQgiA4g7A+IgUAVQhKBLhEAoQhjA8hiAAIgLAAg");
	this.shape_47.setTransform(68.8,65.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#0071BC").ss(3).p("ApdA/QAEg2AUgsQAMgbAUgXQATgVAYgTQA+gsAmguQAfglAWgvQAHgQAGgQQAbhLAngqQAignAsgeQAhgVAmgRQAVgJAXgHQATgGATgEQBdgYBNAeQAjAQAUASQANAPAEAEQAYAaAbA6QAVAqATAiQAKAUAKAQQApBHAyBBQA3BKBSBNQAQAPAKAOQALAKAGALQASAcAGAlQAMBfhCBsQgiA5g7A+QgJAKgLAKQhKBLhFAoQhpA+hpgDQgIAAgJgBQgwgFgjgSQgdgOglgfQhYhFhVg4QgMgIgMgIQgSgLgUgLQhKgrheguQgpgUgVgVQgBAAAAAAQgcgYgOgkQgTgvADg7g");
	this.shape_48.setTransform(68.7,65.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00A99D").s().p("ABVJQIgRgBQgwgFgjgSQgdgOglgfQhYhFhVg4IgYgQQgSgLgUgLQhKgrheguQgpgUgVgVIgBAAQgcgYgOgkQgTgvADg7IAAgBQAEg2AUgsQAMgbAUgXQATgVAYgTQA+gsAmguQAfglAWgvIANggQAbhLAngqQAignAsgeQAhgVAmgRQAVgJAXgHQATgGATgEQBdgYBNAeQAjAQAUASIARATQAYAaAbA6QAVAqATAiIAUAkQApBHAyBBQA3BKBSBNQAQAPAKAOQALAKAGALQASAcAGAlQAMBfhCBsQgiA5g7A+IgUAUQhKBLhFAoQhlA8hjAAIgKgBg");
	this.shape_49.setTransform(68.7,65.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#0071BC").ss(3).p("ApcA6QADg2AUgtQALgbATgXQASgWAXgUQA7guAmgwQAfglAXguQAIgQAGgQQAehJApgqQAjgmAtgcQAigVAmgQQAWgIAWgHQAUgGASgEQBegVBOAdQAjAQAUASQAOAOAEAEQAaAZAcA5QAWAoAUAjQALATAKAQQAqBHAxBCQA3BNBLBQQAPAPAKAPQAJALAGALQARAdAEAlQAKBhhBBrQgjA6g6A9QgKAKgKALQhKBKhHAoQhpA9hqgDQgIAAgJgBQgwgEgkgSQgegNglgdQhZhChWg6QgMgIgMgIQgSgLgUgLQhKgvhZgxQgogVgUgXQgBAAAAgBQgagZgOgkQgTgwAEg6g");
	this.shape_50.setTransform(68.7,66.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00A99D").s().p("ABQJTIgRgBQgwgEgkgSQgegNglgdQhZhChWg6IgYgQIgmgWQhKgvhZgxQgogVgUgXIgBgBQgagZgOgkQgTgwAEg6IAAgCQADg2AUgtQALgbATgXQASgWAXgUQA7guAmgwQAfglAXguIAOggQAehJApgqQAjgmAtgcQAigVAmgQQAWgIAWgHQAUgGASgEQBegVBOAdQAjAQAUASIASASQAaAZAcA5IAqBLIAVAjQAqBHAxBCQA3BNBLBQQAPAPAKAPQAJALAGALQARAdAEAlQAKBhhBBrQgjA6g6A9IgUAVQhKBKhHAoQhlA6hlAAIgJAAg");
	this.shape_51.setTransform(68.7,66.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#0071BC").ss(3).p("ApbA1QADg1ASguQALgcASgYQARgXAXgVQA3gwAngxQAfglAYguQAIgPAHgQQAghIArgpQAlglAugcQAigUAngOQAVgIAXgHQAUgFATgEQBegUBOAeQAjAPAVASQAOANAEAEQAbAaAeA2QAXAnAWAjQALATAKAQQAsBHAwBDQA1BPBGBTQANAQAKAQQAIALAFAMQAPAeAEAkQAIBihBBrQgjA6g6A9QgKALgKAKQhKBKhIAoQhpA8hrgCQgJAAgIgBQgxgEgkgQQgfgNglgcQhbg/hXg7QgMgJgMgIQgRgLgUgMQhKgxhVg1QgmgXgUgYQAAAAAAgBQgZgagOgkQgRgxADg6g");
	this.shape_52.setTransform(68.7,66.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00A99D").s().p("ABMJWIgRgBQgxgEgkgQQgfgNglgcIiyh6IgYgRIglgXQhKgxhVg1QgmgXgUgYIAAgBQgZgagOgkQgRgxADg6IAAgCQADg1ASguQALgcASgYQARgXAXgVQA3gwAngxQAfglAYguIAPgfQAghIArgpQAlglAugcQAigUAngOQAVgIAXgHQAUgFATgEQBegUBOAeQAjAPAVASIASARQAbAaAeA2IAtBKIAVAjQAsBHAwBDQA1BPBGBTQANAQAKAQQAIALAFAMQAPAeAEAkQAIBihBBrQgjA6g6A9IgUAVQhKBKhIAoQhmA6hpAAIgFAAg");
	this.shape_53.setTransform(68.7,66.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#0071BC").ss(3).p("ApbAwQADg1ARgvQAKgcASgZQAQgYAWgVQA1gyAngyQAegnAagtQAIgPAIgPQAihGAtgpQAmgkAugbQAjgTAogOQAVgIAYgFQATgGATgDQBegSBPAdQAkAQAVAQQAOAOAEADQAeAaAfA1QAYAmAXAiQALATALAQQAtBHAuBEQA1BRBABWQAMARAJAQQAIAMAEAMQAOAfADAkQAFBkhABqQgjA7g6A9QgKAKgKAKQhKBKhJAoQhpA7htgBQgIgBgJAAQgxgEgkgPQghgMglgbQhdg8hWg9QgMgIgMgJQgSgMgTgMQhKg0hSg4QgkgYgTgaQAAgBAAAAQgYgbgNglQgQgxACg6g");
	this.shape_54.setTransform(68.7,66.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00A99D").s().p("ABHJZIgRgBQgxgEgkgPQghgMglgbQhdg8hWg9IgYgRIglgYIichsQgkgYgTgaIAAgBQgYgbgNglQgQgxACg6IAAgCQADg1ARgvQAKgcASgZQAQgYAWgVQA1gyAngyQAegnAagtIAQgeQAihGAtgpQAmgkAugbQAjgTAogOQAVgIAYgFQATgGATgDQBegSBPAdQAkAQAVAQIASARQAeAaAfA1IAvBIIAWAjQAtBHAuBEQA1BRBABWQAMARAJAQQAIAMAEAMQAOAfADAkQAFBkhABqQgjA7g6A9IgUAUQhKBKhJAoQhoA6hqAAIgEAAg");
	this.shape_55.setTransform(68.7,66.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#0071BC").ss(3).p("ApaArQACg1ARgvQAJgdARgZQAPgZAVgWQAyg0AngzQAfgnAbgtQAJgOAIgQQAkhEAvgoQAngjAvgaQAjgTAogNQAXgHAXgGQATgEAUgDQBegRBQAdQAjAQAWAQQAOAMAEAEQAgAaAgAzQAZAlAYAiQAMATALAQQAuBGAtBFQA1BTA6BaQALARAIARQAHAMAEANQAMAfACAlQADBlg/BpQgkA8g5A8QgKALgLAKQhJBJhKAoQhpA6hugBQgJAAgJAAQgwgEglgOQgigMglgYQhfg6hXg+QgMgJgMgJQgRgMgTgMQhKg3hOg8QgigZgTgcQAAAAAAgBQgWgcgNgkQgQgyADg7g");
	this.shape_56.setTransform(68.7,67.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00A99D").s().p("ABDJbIgSAAQgwgEglgOQgigMglgYQhfg6hXg+IgYgSIgkgYQhKg3hOg8QgigZgTgcIAAgBQgWgcgNgkQgQgyADg7IAAgCQACg1ARgvQAJgdARgZQAPgZAVgWQAyg0AngzQAfgnAbgtIARgeQAkhEAvgoQAngjAvgaQAjgTAogNQAXgHAXgGIAngHQBegRBQAdQAjAQAWAQIASAQQAgAaAgAzIAxBHIAXAjIBbCLQA1BTA6BaQALARAIARQAHAMAEANQAMAfACAlQADBlg/BpQgkA8g5A8IgVAVQhJBJhKAoQhnA5hsAAIgEAAg");
	this.shape_57.setTransform(68.7,67.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#0071BC").ss(3).p("ApZAmQACg1APgwQAKgdAPgaQAPgZATgYQAwg1Aog1QAegnAcgsQAJgOAJgPQAmhDAxgoQAogiAwgZQAkgSApgMQAWgHAXgFQAUgFAUgCQBegPBQAdQAkAPAWAQQAPAMAEADQAhAaAhAxQAbAkAZAjQAMASALAQQAwBGAsBGQAzBVA1BdQALASAGASQAHAMADANQALAgABAlQABBmg/BpQgkA8g5A8QgKALgKAKQhKBJhLAoQhpA5hvAAQgJgBgJAAQgvgDgngOQgigLgmgXQhgg3hXhAQgMgIgMgJQgRgNgTgNQhKg5hLg/QgggbgSgdQAAAAAAgBQgWgdgLglQgPgyACg7g");
	this.shape_58.setTransform(68.6,67.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00A99D").s().p("AAtJdQgvgDgngOQgigLgmgXQhgg3hXhAIgYgRIgkgaQhKg5hLg/QgggbgSgdIAAgBQgWgdgLglQgPgyACg7IAAgCQACg1APgwQAKgdAPgaQAPgZATgYQAwg1Aog1QAegnAcgsIASgdQAmhDAxgoQAogiAwgZQAkgSApgMQAWgHAXgFQAUgFAUgCQBegPBQAdQAkAPAWAQIATAPQAhAaAhAxIA0BHIAXAiQAwBGAsBGQAzBVA1BdQALASAGASQAHAMADANQALAgABAlQABBmg/BpQgkA8g5A8IgUAVQhKBJhLAoQhpA5hvAAIgSgBg");
	this.shape_59.setTransform(68.6,67.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#0071BC").ss(3).p("ApZAiQACg1APgxQAIgdAPgbQAOgaATgYQAtg3Aog2QAegnAdgsQAKgOAJgPQAphBAygnQApgiAxgYQAlgRAogMQAXgGAXgFQAUgEAUgCQBegNBRAdQAkAOAXAQQAOALAFAEQAjAZAiAvQAcAkAaAiQAMASAMARQAwBFAsBHQAyBXAwBfQAJATAGATQAGAMADAOQAJAhAAAkQgBBog+BoQgkA9g5A8QgKAKgKALQhKBIhMAoQhpA4hwAAQgJAAgJAAQgvgDgogNQgjgKgmgWQhhg0hYhBQgMgJgMgJQgRgNgTgNQhKg8hHhDQgegcgSgeIAAgBQgUgegLglQgPgzACg7g");
	this.shape_60.setTransform(68.6,68);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00A99D").s().p("AApJgQgvgDgogNQgjgKgmgWQhhg0hYhBIgYgSIgkgaQhKg8hHhDQgegcgSgeIAAgBQgUgegLglQgPgzACg7IAAgCQACg1APgxQAIgdAPgbQAOgaATgYQAtg3Aog2QAegnAdgsIATgdQAphBAygnQApgiAxgYQAlgRAogMQAXgGAXgFIAogGQBegNBRAdQAkAOAXAQIATAPQAjAZAiAvIA2BGIAYAjQAwBFAsBHQAyBXAwBfQAJATAGATQAGAMADAOQAJAhAAAkQgBBog+BoQgkA9g5A8IgUAVQhKBIhMAoQhpA4hwAAIgSAAg");
	this.shape_61.setTransform(68.6,68);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#0071BC").ss(3).p("ApZAdQACg1AOgxQAIgeAOgbQANgbASgZQArg5Aog2QAegoAegrQALgOAJgPQArg/A0gnQAqghAygXQAlgRApgLQAXgGAXgEQAUgEAVgCQBegLBRAdQAlAOAWAPQAPALAFADQAkAaAkAtQAcAjAbAiQANASAMAQQAyBGAqBIQAyBZArBiQAIATAFATQAFANADAPQAHAhAAAkQgDBqg+BmQgkA+g5A8QgKAKgLALQhJBIhNAoQhpA3hyABQgJAAgIgBQgwgCgogMQgkgKgmgVQhjgxhYhDQgMgJgMgJQgRgNgSgOQhKg+hDhGQgegdgQggQAAAAgBgBQgTgegKgmQgOg0ABg6g");
	this.shape_62.setTransform(68.6,68.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00A99D").s().p("AAlJiQgwgCgogMQgkgKgmgVQhjgxhYhDIgYgSIgjgbQhKg+hDhGQgegdgQggIgBgBQgTgegKgmQgOg0ABg6IAAgDQACg1AOgxQAIgeAOgbQANgbASgZIBThvIA8hTIAUgdQArg/A0gnQAqghAygXQAlgRApgLQAXgGAXgEQAUgEAVgCQBegLBRAdQAlAOAWAPIAUAOQAkAaAkAtIA3BFIAZAiQAyBGAqBIQAyBZArBiQAIATAFATQAFANADAPQAHAhAAAkQgDBqg+BmQgkA+g5A8IgVAVQhJBIhNAoQhpA3hyABIgRgBg");
	this.shape_63.setTransform(68.6,68.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#0071BC").ss(3).p("ApYAZQABg1ANgyQAIgeANgbQANgcARgZQAog7Apg4QAegoAfgqQAKgPALgOQAsg+A2gmQArggAygWQAmgRApgKQAXgGAYgEQAUgDAVgCQBegJBSAcQAkAOAXAPQAQAKAEAEQAmAZAlAsQAeAhAbAjQAOARAMARQAzBFApBJQAxBbAmBkQAHAUAFAUQAEANACAPQAGAigBAlQgFBqg8BmQglA/g5A7QgKALgLAKQhJBIhOAoQhpA2hzABQgJAAgIAAQgwgCgpgLQglgJgmgUQhkgvhYhEQgMgJgMgKQgRgNgSgOQhKhAhAhJQgcgfgQghQAAAAAAgBQgSgggKglQgNg1ABg6g");
	this.shape_64.setTransform(68.6,68.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00A99D").s().p("AAhJlQgwgCgpgLQglgJgmgUQhkgvhYhEIgYgTIgjgbQhKhAhAhJQgcgfgQghIAAgBQgSgggKglQgNg1ABg6IAAgDQABg1ANgyQAIgeANgbQANgcARgZQAog7Apg4IA9hSIAVgdQAsg+A2gmQArggAygWQAmgRApgKQAXgGAYgEQAUgDAVgCQBegJBSAcQAkAOAXAPIAUAOQAmAZAlAsQAeAhAbAjIAaAiQAzBFApBJQAxBbAmBkQAHAUAFAUQAEANACAPQAGAigBAlQgFBqg8BmQglA/g5A7IgVAVQhJBIhOAoQhpA2hzABIgRAAg");
	this.shape_65.setTransform(68.6,68.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#0071BC").ss(3).p("ApYAVQABg1ANgyQAHgfAMgcQAMgcAQgaQAmg9Apg4QAegpAggqQALgOALgOQAug8A3gmQAtggAzgVQAmgPAqgKQAXgGAYgDQAUgDAVgCQBegIBTAcQAkAOAYAOQAPALAFADQAnAZAmArQAfAgAcAjQAOARANAQQAzBGApBJQAwBcAhBoQAHAUAEAVQADAOACAPQAFAjgCAkQgHBsg8BlQglA/g5A7QgKALgKAKQhKBIhPAoQhpA1h0ACQgJAAgIAAQgwgCgpgLQgmgIgngTQhlgthYhEQgMgKgMgJQgRgOgSgPQhKhCg9hMQgagggPgiQgBAAAAgBQgRghgJgmQgNg1ABg6g");
	this.shape_66.setTransform(68.6,68.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00A99D").s().p("AAdJoQgwgCgpgLQgmgIgngTQhlgthZhEIgXgTIgjgdQhKhCg9hMQgagggQgiIAAgBQgRghgKgmQgMg1ABg6IAAgDQABg1AMgyQAIgfAMgcQAMgcAQgaQAmg9Apg4IA+hTIAWgcQAug8A3gmQAtggAzgVQAlgPArgKQAXgGAYgDQAUgDAUgCQBfgIBSAcQAlAOAYAOIAUAOQAnAZAmArQAfAgAcAjIAaAhQA0BGAoBJQAxBcAhBoQAGAUAFAVQADAOABAPQAGAjgCAkQgHBsg8BlQglA/g5A7IgVAVQhJBIhQAoQhoA1h0ACIgRAAg");
	this.shape_67.setTransform(68.6,68.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#0071BC").ss(3).p("ApYARQABg1AMgzQAGgeAMgdQALgdAPgbQAkg+Aqg6QAegpAhgpQALgOALgNQAwg8A5glQAtgfA0gUQAmgPAqgKQAYgFAYgDQAVgDAUgBQBfgGBTAcQAlAOAXANQAQAKAFADQApAZAmApQAgAgAeAjQAOARAMAQQA1BFAnBLQAxBdAcBrQAGAUADAWQADAOABAPQADAkgCAkQgJBtg7BlQglA/g5A7QgKALgLAKQhJBHhRAoQhoA1h1ACQgJAAgJAAQgvgBgqgKQgngIgmgSQhngqhZhGQgMgKgMgKQgRgNgRgPQhLhFg5hPQgYghgPgjQgBgBAAAAQgQgigJgmQgMg1ABg7g");
	this.shape_68.setTransform(68.7,69.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00A99D").s().p("AAYJqQgvgBgqgKQgngIgmgSQhngqhZhGIgYgUIgigcQhLhFg5hPQgYghgPgjIgBgBQgQgigJgmQgMg1ABg7IAAgDQABg1AMgzQAGgeAMgdQALgdAPgbQAkg+Aqg6QAegpAhgpIAWgbQAwg8A5glQAtgfA0gUQAmgPAqgKQAYgFAYgDQAVgDAUgBQBfgGBTAcQAlAOAXANIAVANQApAZAmApQAgAgAeAjIAaAhQA1BFAnBLQAxBdAcBrQAGAUADAWQADAOABAPQADAkgCAkQgJBtg7BlQglA/g5A7IgVAVQhJBHhRAoQhoA1h1ACIgSAAg");
	this.shape_69.setTransform(68.7,69.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#0071BC").ss(3).p("ApYANQABg1ALgzQAGgfALgdQALgeAOgcQAig/Aqg7QAdgpAigpQAMgOAMgNQAyg6A6glQAugeA0gUQAngOArgJQAXgFAZgCQAUgDAVgBQBfgFBUAcQAkAOAYANQAQAKAFACQAqAaAoAnQAhAfAeAiQAOARANARQA2BFAnBLQAvBfAYBtQAFAVACAWQACAPABAQQACAjgDAlQgKBug7BkQglBAg5A7QgKALgLAKQhJBHhRAoQhpA0h2ACQgJAAgJAAQgvgBgqgJQgogIgngQQhngohahHQgMgKgMgKQgQgOgRgPQhLhHg2hSQgXgigPglIAAAAQgPgjgJgnQgLg1AAg7g");
	this.shape_70.setTransform(68.7,69.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00A99D").s().p("AAUJsQgvgBgqgJQgogIgngQQhngohahHIgYgUIghgdQhLhHg2hSQgXgigPglIAAAAQgPgjgJgnQgLg1AAg7IAAgDQABg1ALgzQAGgfALgdQALgeAOgcQAig/Aqg7QAdgpAigpIAYgbQAyg6A6glQAugeA0gUQAngOArgJQAXgFAZgCQAUgDAVgBQBfgFBUAcQAkAOAYANIAVAMQAqAaAoAnQAhAfAeAiIAbAiQA2BFAnBLQAvBfAYBtQAFAVACAWIADAfQACAjgDAlQgKBug7BkQglBAg5A7IgVAVQhJBHhRAoQhpA0h2ACIgSAAg");
	this.shape_71.setTransform(68.7,69.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#0071BC").ss(3).p("ApYAJQABg1AKgzQAGgfAKgeQAKgeAOgdQAfhBAqg7QAegqAjgoQAMgOAMgNQA0g4A7glQAvgdA1gTQAogOAqgIQAYgFAZgCQAUgDAWAAQBegEBUAcQAlANAYANQARAJAEADQAsAZApAmQAhAeAgAjQAOAQAOARQA2BFAmBMQAvBhATBvQAEAWACAWQACAPAAAQQABAlgEAkQgMBwg6BjQgmBAg4A7QgKALgLAKQhJBHhSAoQhpAzh3ADQgJAAgJAAQgvgBgrgIQgogIgngPQhpgmhahIQgMgKgMgKQgQgPgRgPQhLhJgzhUQgWgkgOglQAAgBAAAAQgOgjgIgnQgLg3AAg6g");
	this.shape_72.setTransform(68.7,69.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00A99D").s().p("AAQJvQgvgBgrgIQgogIgngPQhpgmhahIIgYgUIghgeQhLhJgzhUQgWgkgOglIAAgBQgOgjgIgnQgLg3AAg6IAAgEQABg1AKgzQAGgfAKgeQAKgeAOgdQAfhBAqg7QAegqAjgoIAYgbQA0g4A7glQAvgdA1gTQAogOAqgIQAYgFAZgCQAUgDAWAAQBegEBUAcQAlANAYANIAVAMQAsAZApAmQAhAeAgAjIAcAhQA2BFAmBMQAvBhATBvQAEAWACAWQACAPAAAQQABAlgEAkQgMBwg6BjQgmBAg4A7IgVAVQhJBHhSAoQhpAzh3ADIgSAAg");
	this.shape_73.setTransform(68.7,69.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#0071BC").ss(3).p("ApYAGQAAg1AJg0QAGggAJgeQAKgeANgdQAehDAqg8QAdgqAkgoQAMgOANgMQA1g4A9gkQAwgdA1gSQAogOArgHQAYgEAZgCQAVgCAVgBQBfgCBVAbQAkAOAZAMQAQAJAFADQAtAZAqAlQAiAdAgAiQAPARAOAQQA4BFAkBNQAvBiAPByQADAWABAXQABAPAAARQAAAlgEAkQgOBxg6BiQglBBg5A7QgKALgLAKQhJBGhTAoQhpAzh3ADQgJAAgJAAQgwAAgrgIQgpgHgngOQhqgkhahJQgMgKgMgLQgRgOgQgQQhLhLgwhXQgVgkgNgnQAAgBAAAAQgNgkgIgnQgKg3AAg6g");
	this.shape_74.setTransform(68.8,70);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00A99D").s().p("AhPJpQgpgHgngOQhqgkhahJIgYgVQgRgOgQgQQhLhLgwhXQgVgkgNgnIAAgBQgNgkgIgnQgKg3AAg6IAAgEQAAg1AJg0QAGggAJgeQAKgeANgdQAehDAqg8QAdgqAkgoIAZgaQA1g4A9gkQAwgdA1gSQAogOArgHQAYgEAZgCQAVgCAVgBQBfgCBVAbQAkAOAZAMIAVAMQAtAZAqAlQAiAdAgAiIAdAhQA4BFAkBNQAvBiAPByQADAWABAXIABAgQAAAlgEAkQgOBxg6BiQglBBg5A7IgVAVQhJBGhTAoQhpAzh3ADIgSAAQgwAAgrgIg");
	this.shape_75.setTransform(68.8,70);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#0071BC").ss(3).p("ApZADQAAg2AJg0QAFggAJgeQAJgfAMgeQAchEAqg9QAegqAkgoQANgNANgNQA3g2A+gkQAxgcA2gSQAogNArgHQAZgDAZgCQAUgCAWAAQBegBBWAbQAlANAYAMQARAJAFADQAuAZArAjQAjAdAhAiQAPAQAOARQA5BEAjBOQAuBkAMB0QACAWABAXQAAAQAAARQgBAmgFAkQgQByg5BiQgmBBg4A6QgLALgKAKQhJBHhUAoQhpAxh5AEQgJAAgJAAQgvAAgsgHQgpgGgogNQhrgihahLQgMgKgMgLQgRgOgQgRQhLhMgthZQgUgmgMgoQgBAAAAgBQgMglgHgnQgKg3AAg7g");
	this.shape_76.setTransform(68.9,70.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00A99D").s().p("AhUJsQgpgGgogNQhrgihahLIgYgVQgRgOgQgRQhLhMgthZQgUgmgMgoIgBgBQgMglgHgnQgKg3AAg7IAAgDQAAg2AJg0QAFggAJgeQAJgfAMgeQAchEAqg9QAegqAkgoIAagaQA3g2A+gkQAxgcA2gSQAogNArgHQAZgDAZgCQAUgCAWAAQBegBBWAbQAlANAYAMIAWAMQAuAZArAjQAjAdAhAiIAdAhQA5BEAjBOQAuBkAMB0QACAWABAXIAAAhQgBAmgFAkQgQByg5BiQgmBBg4A6IgVAVQhJBHhUAoQhpAxh5AEIgSAAQgvAAgsgHg");
	this.shape_77.setTransform(68.9,70.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.2,206,123.7,129);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
