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
(lib.orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(3).p("AJbAAQAAEEixC5QixC5j5AAQj5AAiwi5QiBiGgjiwQgNhBAAhGQAAhFANhCQAjivCBiGQCwi5D5AAQD5AACxC5QCxC4AAEEg");
	this.shape.setTransform(69,70.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AmpG9QiBiGgjiwQgNhBAAhGQAAhFANhCQAjivCBiGQCwi4D5gBQD5ABCxC4QCxC5AAEDQAAEFixC4QixC4j5AAQj5AAiwi4g");
	this.shape_1.setTransform(69,70.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF6600").ss(3).p("ApZAEQABg2AJg0QAJguAGgSQAJgfANgdQAdhDAqg9QAdgpAjgmQAOgPAOgOQA2g2A+gkQAxgcA1gRQAogNArgHQAYgEAZgCQAUgCAUAAQBggCBXAdQAGACAFACQAaAJAZAMQAGADAFAEQAFACAFADQAtAYAqAlQAiAcAfAiQAQARAOARQA4BEAkBNQAuBjANBzQACAWABAXQABAQgBARQAAAmgFAkQgPBxg6BiQglBBg4A6QgKALgLALQhKBGhTAoQhoAyh6ADQgJAAgJAAQguAAgrgIQgqgGgngOQhqgihahJQgMgKgMgLQgRgPgRgRQhKhLgvhYQgUglgNgnQAAgBAAAAQgKgdgHgeQgCgJgCgKQgKg3AAg7g");
	this.shape_2.setTransform(68.9,70.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AhRJqQgqgGgngOQhqgihahJIgYgVIgiggQhKhLgvhYQgUglgNgnIAAgBQgKgdgHgeIgEgTQgKg3AAg7IAAgCQABg2AJg0QAJguAGgSQAJgfANgdQAdhDAqg9QAdgpAjgmIAcgdQA2g2A+gkQAxgcA1gRQAogNArgHQAYgEAZgCIAogCQBggCBXAdIALAEQAaAJAZAMIALAHIAKAFQAtAYAqAlQAiAcAfAiIAeAiQA4BEAkBNQAuBjANBzQACAWABAXIAAAhQAAAmgFAkQgPBxg6BiQglBBg4A6IgVAWQhKBGhTAoQhoAyh6ADIgSAAQguAAgrgIg");
	this.shape_3.setTransform(68.9,70.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF6600").ss(3).p("ApYAJQAAg2ALg0QAKgtAGgRQAKgeAOgdQAfhBArg7QAcgpAjgnQANgPANgPQA0g4A8gkQAvgcA1gTQAogOAqgHQAYgFAZgCQATgCAUgBQBhgDBWAdQAFACAGACQAZAJAZANQAFADAGADQAFADAEADQAsAZApAmQAgAdAfAiQAPARAOARQA2BFAlBMQAvBhATBvQADAWACAWQACAPAAARQABAlgEAkQgOBwg5BjQgmBAg4A6QgKALgLALQhJBHhTAoQhoAzh4ACQgJAAgJAAQgvAAgqgJQgpgHgngPQhoglhahIQgMgKgMgKQgRgPgRgQQhKhJgzhVQgVgjgOgmQAAAAAAgBQgMgcgHgdQgCgJgCgKQgLg2ABg7g");
	this.shape_4.setTransform(68.8,69.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AAOJvQgvAAgqgJQgpgHgngPQhoglhahIIgYgUIgigfQhKhJgzhVQgVgjgOgmIAAgBQgMgcgHgdIgEgTQgLg2ABg7IAAgCQAAg2ALg0QAKgtAGgRQAKgeAOgdQAfhBArg7QAcgpAjgnIAageQA0g4A8gkQAvgcA1gTQAogOAqgHQAYgFAZgCQATgCAUgBQBhgDBWAdIALAEQAZAJAZANIALAGIAJAGQAsAZApAmQAgAdAfAiIAdAiQA2BFAlBMQAvBhATBvQADAWACAWQACAPAAARQABAlgEAkQgOBwg5BjQgmBAg4A6IgVAWQhJBHhTAoQhoAzh4ACIgSAAg");
	this.shape_5.setTransform(68.8,69.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF6600").ss(3).p("ApYANQABg2ALgzQAMgsAGgRQALgdAOgcQAjg/Aqg6QAdgoAhgoQAMgPANgPQAyg6A6gkQAugeA0gTQAngPAqgIQAYgFAYgDQAUgCATgBQBhgGBVAeQAGACAFACQAaAJAYANQAFAEAGADQAFADAEADQAqAZAnAoQAgAeAdAiQAPARANASQA2BEAmBLQAvBfAZBtQAEAVADAVQACAPABAQQACAkgDAlQgLBug6BjQgmBAg4A7QgKALgLAKQhJBHhRAoQhpA0h2ACQgJAAgJAAQgvgBgqgJQgngIgngQQhngphahGQgMgJgMgLQgRgOgRgQQhKhGg3hRQgXgigOgkQAAgBAAAAQgNgbgHgdQgDgKgCgJQgLg2AAg7g");
	this.shape_6.setTransform(68.7,69.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AAUJsQgvgBgqgJQgngIgngQQhngphahGIgYgUIgigeQhKhGg3hRQgXgigOgkIAAgBQgNgbgHgdIgFgTQgLg2AAg7IAAgCQABg2ALgzQAMgsAGgRQALgdAOgcQAjg/Aqg6QAdgoAhgoIAZgeQAyg6A6gkQAugeA0gTQAngPAqgIQAYgFAYgDIAngDQBhgGBVAeIALAEQAaAJAYANIALAHIAJAGQAqAZAnAoQAgAeAdAiIAcAjQA2BEAmBLQAvBfAZBtQAEAVADAVQACAPABAQQACAkgDAlQgLBug6BjQgmBAg4A7IgVAVQhJBHhRAoQhpA0h2ACIgSAAg");
	this.shape_7.setTransform(68.7,69.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF6600").ss(3).p("ApYASQABg2AMgyQAMgrAHgRQAMgdAPgbQAlg9Aqg5QAdgoAggoQAMgQAMgOQAwg8A4glQAtgeAzgVQAngPAqgJQAXgFAYgEQATgCAUgCQBggHBVAdQAFADAFACQAaAJAXAOQAGADAGAEQAEADAEADQApAZAmAqQAeAfAdAiQAOASANARQA0BFAoBKQAwBdAeBpQAFAVAEAUQADAPABAQQAEAjgCAkQgJBtg7BkQglA/g4A7QgLALgLAKQhJBIhQAoQhoA1h2ABQgIAAgJAAQgvgBgpgKQgngJgngRQhlgshZhEQgMgKgMgKQgRgOgSgPQhKhEg6hNQgZghgPgjQgBAAAAgBQgNgagIgdQgDgJgCgJQgMg1ABg7g");
	this.shape_8.setTransform(68.7,69.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AAZJpQgvgBgpgKQgngJgngRQhlgshZhEIgYgUIgjgdQhKhEg6hNQgZghgPgjIgBgBQgNgagIgdIgFgSQgMg1ABg7IAAgCQABg2AMgyQAMgrAHgRQAMgdAPgbQAlg9Aqg5QAdgoAggoIAYgeQAwg8A4glQAtgeAzgVQAngPAqgJQAXgFAYgEIAngEQBggHBVAdIAKAFQAaAJAXAOIAMAHIAIAGQApAZAmAqQAeAfAdAiIAbAjQA0BFAoBKQAwBdAeBpQAFAVAEAUIAEAfQAEAjgCAkQgJBtg7BkQglA/g4A7IgWAVQhJBIhQAoQhoA1h2ABIgRAAg");
	this.shape_9.setTransform(68.7,69.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF6600").ss(3).p("ApYAXQABg2ANgyQANgqAIgRQAMgcARgaQAog7Apg4QAdgnAegpQAMgQAMgPQAtg9A2gmQAsgfAzgVQAmgQApgKQAXgGAYgDQATgDATgCQBhgJBTAdQAGACAFACQAaAKAXAPQAFADAGAEQAEADAFADQAmAZAlAsQAdAgAbAiQAOASANARQAzBFApBKQAxBaAjBnQAHATAEAUQAEAOACAQQAFAigBAkQgGBsg9BlQgkA+g5A7QgKALgLALQhJBHhPApQhpA1hzABQgJABgJgBQgvgCgpgLQglgIgngUQhkguhYhDQgMgJgMgKQgSgOgRgPQhKhBg/hKQgagfgQghQAAgBAAAAQgOgZgJgdQgDgJgCgJQgNg0ABg8g");
	this.shape_10.setTransform(68.6,68.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AAdJmQgugCgpgLQglgIgngUQhkguhYhDIgZgTIgjgdQhJhBg/hKQgagfgRghIAAgBQgOgZgIgdIgGgSQgNg0ACg8IAAgBQABg2ANgyQANgqAIgRQAMgcARgaQAog7Apg4IA7hQIAXgfQAug9A2gmQAsgfAzgVQAmgQApgKQAXgGAYgDIAmgFQBhgJBTAdIALAEQAZAKAYAPIAKAHIAJAGQAmAZAmAsQAdAgAbAiIAbAjQAzBFApBKQAxBaAjBnQAGATAEAUQAFAOABAQQAGAigBAkQgGBsg9BlQgkA+g5A7IgVAWQhKBHhOApQhpA1h0ABIgJAAIgJAAg");
	this.shape_11.setTransform(68.6,68.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF6600").ss(3).p("ApYAcQABg2AOgyQAOgpAIgQQANgbASgZQAqg6Apg3QAdgmAegqQALgQALgPQArg/A0gmQArghAygWQAlgRApgKQAXgGAYgEQATgEATgBQBggMBTAeQAFACAGACQAZAKAXAPQAFAEAGAEQAEADAEAEQAlAZAkAtQAcAhAaAiQANASANASQAyBFApBIQAyBZApBjQAIATAFATQAFAOACAPQAHAhAAAlQgFBqg8BmQglA9g4A8QgLAKgLALQhJBIhOAoQhoA3hzABQgIAAgJgBQgvgCgogMQglgJgmgVQhjgxhYhCQgMgJgMgJQgRgOgSgOQhKg/hChGQgdgegQggQgBAAAAgBQgPgYgJgcQgDgJgCgJQgOg0ACg7g");
	this.shape_12.setTransform(68.6,68.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AAjJjQgvgCgogMQglgJgmgVQhjgxhYhCIgYgSIgjgcQhKg/hChGQgdgegQggIgBgBQgPgYgJgcIgFgSQgOg0ACg7IAAgBQABg2AOgyQAOgpAIgQQANgbASgZIBThxIA7hQIAWgfQArg/A0gmQArghAygWQAlgRApgKQAXgGAYgEQATgEATgBQBggMBTAeIALAEQAZAKAXAPIALAIIAIAHQAlAZAkAtQAcAhAaAiIAaAkQAyBFApBIQAyBZApBjQAIATAFATQAFAOACAPQAHAhAAAlQgFBqg8BmQglA9g4A8IgWAVQhJBIhOAoQhoA3hzABIgRgBg");
	this.shape_13.setTransform(68.6,68.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF6600").ss(3).p("ApZAgQACg1APgxQAPgpAIgQQAOgaATgYQAtg4Aog1QAdgnAdgqQALgQAKgQQAphAAygnQAqghAxgXQAlgSAogLQAXgHAXgEQATgEATgCQBggNBSAeQAGACAFACQAZAKAXAQQAFAEAFAEQAFADAEAEQAiAZAjAvQAbAiAZAiQANATANARQAwBFArBIQAyBWAvBgQAJATAFASQAGANADAPQAJAhAAAkQgCBpg9BmQgkA9g5A8QgKALgLAKQhKBJhMAoQhpA4hxAAQgJAAgJgBQgugCgogNQgkgKgmgWQhhg0hXhBQgMgIgMgKQgSgNgSgOQhKg8hGhDQgegcgSgeQAAgBAAAAQgQgYgKgbQgDgJgCgJQgPgzACg7g");
	this.shape_14.setTransform(68.6,68.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("AAnJgQgugCgogNQgkgKgmgWQhhg0hXhBIgYgSIgkgbQhKg8hGhDQgegcgSgeIAAgBQgQgYgKgbIgFgSQgPgzACg7IAAgCQACg1APgxQAPgpAIgQQAOgaATgYQAtg4Aog1QAdgnAdgqIAVggQAphAAygnQAqghAxgXQAlgSAogLQAXgHAXgEQATgEATgCQBggNBSAeIALAEQAZAKAXAQIAKAIIAJAHQAiAZAjAvQAbAiAZAiIAaAkQAwBFArBIQAyBWAvBgQAJATAFASQAGANADAPQAJAhAAAkQgCBpg9BmQgkA9g5A8IgVAVQhKBJhMAoQhpA4hxAAIgSgBg");
	this.shape_15.setTransform(68.6,68.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF6600").ss(3).p("ApZAlQACg1AQgxQAPgoAKgPQAOgaATgXQAwg2Aog0QAdgmAcgrQAKgQAKgQQAnhCAwgoQApgiAwgYQAkgSAogMQAWgHAYgFQATgEASgCQBggPBSAeQAFACAGACQAZAKAWAQQAFAEAFAFQAEADAEAEQAhAZAiAxQAaAjAYAiQAMATAMARQAwBGAsBGQAzBVA0BdQAKASAGARQAHANADAOQALAgABAkQAABng+BoQgkA8g5A8QgKALgLALQhKBIhLApQhpA4hvAAQgJAAgJgBQgugDgogNQgigLgmgXQhgg3hXg/QgMgJgMgJQgSgNgSgNQhKg5hKhAQgggbgSgdQAAAAAAgBQgRgWgKgcQgDgIgDgJQgQgzADg7g");
	this.shape_16.setTransform(68.6,67.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AA+JeIgSAAQgugEgogNQgigLgmgXQhgg3hXg/IgYgSIgkgaQhKg5hKg/QgggcgSgdIAAgBQgRgWgKgbIgGgSQgQgzADg6IAAgCQACg1AQgxQAPgoAKgPQAOgaATgXQAwg2Aog0QAdgmAcgqIAUghQAnhCAwgoQApghAwgZQAkgSAogMQAWgHAYgFIAlgGQBggPBSAeIALAEQAZAKAWAQIAKAJIAIAHQAhAZAiAxIAyBFIAYAkQAwBGAsBHQAzBUA0BdQAKASAGARQAHANADAOQALAgABAkQAABng+BoQgkA9g5A7IgVAWQhKBJhLAoQhoA4huAAIgCAAg");
	this.shape_17.setTransform(68.6,67.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF6600").ss(3).p("ApaAqQADg1AQgwQARgoAKgOQAPgZAUgXQAzg0AngzQAeglAagrQAKgQAJgRQAlhEAugoQAogjAvgZQAkgTAngNQAWgHAYgFQASgEASgDQBggRBRAeQAGACAFACQAZALAWAQQAFAEAFAFQAEAEAEADQAfAaAgAzQAZAkAXAiQAMATAMARQAuBGAtBFQA0BTA6BaQALARAHARQAIAMAEANQALAgACAkQADBmg/BoQgkA8g5A8QgKALgLAKQhJBJhKApQhpA5hvgBQgIAAgJAAQgwgEglgOQgigLgmgZQheg6hXg9QgMgJgMgJQgRgMgTgNQhKg3hOg8QghgagTgbQAAAAAAgBQgSgVgLgbQgDgJgDgJQgQgyACg7g");
	this.shape_18.setTransform(68.6,67.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9900").s().p("ABCJbIgRAAQgwgEglgOQgigLgmgZQheg6hXg9IgYgSIgkgZQhKg3hOg8QghgagTgbIAAgBQgSgVgLgbIgGgSQgQgyACg7IAAgBQADg1AQgwQARgoAKgOQAPgZAUgXQAzg0AngzQAeglAagrIATghQAlhEAugoQAogjAvgZQAkgTAngNQAWgHAYgFIAkgHQBggRBRAeIALAEQAZALAWAQIAKAJIAIAHQAfAaAgAzIAwBGIAYAkIBbCLIBuCtQALARAHARQAIAMAEANQALAgACAkQADBmg/BoQgkA8g5A8IgVAVQhJBJhKApQhoA4hsAAIgEAAg");
	this.shape_19.setTransform(68.6,67.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF6600").ss(3).p("ApbAvQADg1ASgwQARgmAKgPQAQgYAWgVQA1gyAngyQAdglAagsQAJgRAJgQQAihGAtgoQAmgkAvgbQAigTAogNQAWgIAXgGQASgFASgDQBggSBQAeQAGACAFACQAZALAVARQAFAEAFAFQAEAEAEAEQAdAZAgA1QAXAlAWAiQAMATALARQAtBHAuBEQA1BRA/BWQAMARAIAQQAJAMAEANQAOAeADAlQAEBkg/BpQgkA7g5A8QgKALgLALQhKBJhJAoQhoA7htgBQgJgBgJAAQgwgEglgPQgggMglgaQhdg9hXg8QgMgJgMgIQgRgMgUgNQhJg0hSg4QgkgYgTgaIAAgBQgTgVgLgbQgEgIgDgJQgRgxADg7g");
	this.shape_20.setTransform(68.7,67);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF9900").s().p("ABHJZIgSgBQgwgEglgPQgggMglgaQhdg9hXg8IgYgRIglgZIibhsQgkgYgTgaIAAgBQgTgVgLgbIgHgRQgRgxADg7IAAgBQADg1ASgwQARgmAKgPQAQgYAWgVQA1gyAngyQAdglAagsIASghQAihGAtgoQAmgkAvgbQAigTAogNQAWgIAXgGQASgFASgDQBggSBQAeIALAEQAZALAVARIAKAJIAIAIQAdAZAgA1QAXAlAWAiIAXAkQAtBHAuBEQA1BRA/BWQAMARAIAQQAJAMAEANQAOAeADAlQAEBkg/BpQgkA7g5A8IgVAWQhKBJhJAoQhmA6hqAAIgFAAg");
	this.shape_21.setTransform(68.7,67);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF6600").ss(3).p("ApbA0QADg0ASgwQATgmAKgOQARgXAXgVQA3gwAngxQAegkAYgsQAJgRAIgRQAghIArgoQAlglAugcQAigUAngOQAWgIAWgGQASgFASgEQBggUBQAeQAFACAFADQAZALAVARQAFAEAFAFQAEAEADAEQAcAaAeA2QAWAnAWAhQALAUALARQArBHAwBDQA1BPBFBTQANAQAJAPQAJAMAGAMQAOAeAEAlQAHBihABqQgjA6g6A9QgKALgLAKQhJBKhIAoQhpA8hsgCQgIAAgJgBQgwgEgkgQQgggNglgbQhbg/hWg7QgMgJgMgIQgSgLgUgNQhJgxhWg1QglgXgUgYQAAAAAAgBQgUgUgMgaQgEgIgDgJQgRgxADg7g");
	this.shape_22.setTransform(68.7,66.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF9900").s().p("ABLJWIgRgBQgwgEgkgQQgggNglgbIixh6IgYgRIgmgYQhJgxhWg1QglgXgUgYIAAgBQgUgUgMgaIgHgRQgRgxADg7IAAgBQADg0ASgwQATgmAKgOQARgXAXgVQA3gwAngxQAegkAYgsIARgiQAghIArgoQAlglAugcQAigUAngOQAWgIAWgGIAkgJQBggUBQAeIAKAFQAZALAVARIAKAJIAHAIQAcAaAeA2QAWAnAWAhIAWAlQArBHAwBDQA1BPBFBTQANAQAJAPQAJAMAGAMQAOAeAEAlQAHBihABqQgjA6g6A9IgVAVQhJBKhIAoQhmA6hoAAIgHAAg");
	this.shape_23.setTransform(68.7,66.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF6600").ss(3).p("ApcA5QADg3AUgsQATgmALgOQARgWAYgUQA6guAngwQAdgkAXgsQAJgRAIgSQAdhJAqgpQAjgmAugcQAhgVAngPQAVgIAXgHQARgFASgEQBggXBPAfQAFACAFACQAZAMAUARQAFAFAFAFQAEAEADAEQAbAaAcA4QAVAoAVAhQALAUAKASQAqBGAxBCQA2BNBLBQQAOAQAKAOQAKALAFAMQARAdAEAlQAKBhhCBrQgjA5g5A+QgKAKgLALQhKBKhGAoQhpA9hrgDQgIAAgJgBQgwgEgjgRQgfgNglgdQhZhDhXg5QgMgIgMgIQgRgLgUgMQhJgvhagxQgngWgUgXQgBAAAAAAQgUgUgNgaQgEgIgDgIQgTgwAEg7g");
	this.shape_24.setTransform(68.7,66.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9900").s().p("ABPJTIgRgBQgwgEgjgRQgfgNglgdQhZhDhXg5IgYgQIglgXQhJgvhagxQgngWgUgXIgBAAQgUgUgNgaIgHgQQgTgwAEg7IAAgBQADg3AUgsQATgmALgOQARgWAYgUQA6guAngwQAdgkAXgsIARgjQAdhJAqgpQAjgmAugcQAhgVAngPQAVgIAXgHIAjgJQBggXBPAfIAKAEQAZAMAUARIAKAKIAHAIQAbAaAcA4QAVAoAVAhIAVAmQAqBGAxBCQA2BNBLBQQAOAQAKAOQAKALAFAMQARAdAEAlQAKBhhCBrQgjA5g5A+IgVAVQhKBKhGAoQhlA7hmAAIgJgBg");
	this.shape_25.setTransform(68.7,66.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF6600").ss(3).p("ApdA+QAEg2AUgsQAUglAMgOQASgVAZgTQA9gsAmgvQAegkAVgtQAJgRAHgSQAbhKAogqQAignAtgdQAggVAngQQAVgJAWgHQASgGARgEQBggYBOAeQAGACAFADQAYALAUASQAFAFAFAGQADAEAEAEQAYAZAcA7QAUAoATAiQALAUAKARQApBHAyBBQA3BLBQBNQAPAPAKAOQALAKAGAMQASAcAGAlQAMBfhDBsQgiA5g6A9QgKALgKALQhLBKhFAoQhpA+hpgDQgJgBgIAAQgwgFgjgSQgegOgkgeQhYhFhWg4QgMgIgMgIQgSgLgUgLQhJgsheguQgpgUgVgWIAAAAQgVgTgOgZQgEgIgDgJQgTgvADg7g");
	this.shape_26.setTransform(68.7,65.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF9900").s().p("ABUJRIgRgBQgwgFgjgSQgegOgkgeQhYhFhWg4IgYgQIgmgWQhJgsheguQgpgUgVgWIAAAAQgVgTgOgZIgHgRQgTgvADg7IAAgBQAEg2AUgsQAUglAMgOQASgVAZgTQA9gsAmgvQAegkAVgtQAJgRAHgSQAbhKAogqQAignAtgdQAggVAngQQAVgJAWgHIAjgKQBggYBOAeIALAFQAYALAUASIAKALIAHAIQAYAZAcA7QAUAoATAiIAVAlQApBHAyBBQA3BLBQBNQAPAPAKAOQALAKAGAMQASAcAGAlQAMBfhDBsQgiA5g6A9IgUAWQhLBKhFAoQhkA7hkAAIgKAAg");
	this.shape_27.setTransform(68.7,65.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF6600").ss(3).p("ApeBDQAEg2AWgsQAVgkAMgNQATgVAZgSQBAgqAmguQAdgjAVguQAIgRAGgSQAZhNAmgqQAignArgfQAggWAmgQQAVgKAWgHQASgGARgFQBggaBNAfQAGACAFADQAYALAUATQAFAFAEAFQAEAFADAEQAXAaAaA8QATApASAiQAKAVAKARQAoBHAzBAQA3BJBWBJQAQAPAMANQALALAHAKQAUAcAGAkQAOBehDBtQgiA4g6A+QgKAKgLALQhKBLhEAoQhpA/hogEQgIgBgJAAQgwgFgigTQgdgPgkgfQhXhIhVg3QgMgIgMgHQgSgLgVgLQhJgphhgrQgrgSgVgUQgBAAAAgBQgWgSgOgZQgEgHgEgJQgUgvAEg6g");
	this.shape_28.setTransform(68.8,65.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9900").s().p("ABYJOIgRgBQgwgFgigTQgdgPgkgfQhXhIhVg3IgYgPQgSgLgVgLQhJgphhgrQgrgSgVgUIgBgBQgWgSgOgZIgIgQQgUgvAEg6IAAgBQAEg2AWgsQAVgkAMgNQATgVAZgSQBAgqAmguQAdgjAVguIAOgjQAZhNAmgqQAignArgfQAggWAmgQQAVgKAWgHIAjgLQBggaBNAfIALAFQAYALAUATIAJAKIAHAJQAXAaAaA8QATApASAiIAUAmQAoBHAzBAQA3BJBWBJQAQAPAMANQALALAHAKQAUAcAGAkQAOBehDBtQgiA4g6A+IgVAVQhKBLhEAoQhjA8hjAAIgLgBg");
	this.shape_29.setTransform(68.8,65.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF6600").ss(3).p("ApeBIQADg2AXgrQAWgkANgMQATgUAbgRQBCgpAmgsQAdgjAUguQAHgRAGgTQAXhOAkgrQAggpArgfQAfgWAmgSQAUgKAXgHQARgHARgEQBggcBMAeQAFACAGADQAYAMATATQAFAFAEAGQAEAEADAFQAVAZAZA/QASAqARAiQAKAUAJARQAnBIA0A/QA4BHBcBGQARAOAMAMQANAMAHAIQAVAbAHAlQAQBdhDBtQgiA4g6A9QgKALgLALQhKBLhDAoQhpBAhmgEQgJgBgJgBQgwgFgigUQgbgPgkghQhVhLhVg1QgMgIgMgHQgSgKgVgLQhJgnhlgnQgtgRgWgSIgBgBQgXgRgOgYQgEgIgEgIQgVgvAFg6g");
	this.shape_30.setTransform(68.8,65.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9900").s().p("ABdJMIgSgCQgwgFgigUQgbgPgkghQhVhLhVg1IgYgPIgngVQhJgnhlgnQgtgRgWgSIgBgBQgXgRgOgYIgIgQQgVgvAFg6IAAgBQADg2AXgrQAWgkANgMQATgUAbgRQBCgpAmgsQAdgjAUguQAHgRAGgTQAXhOAkgrQAggpArgfQAfgWAmgSQAUgKAXgHQARgHARgEQBggcBMAeIALAFQAYAMATATIAJALIAHAJQAVAZAZA/QASAqARAiIATAlQAnBIA0A/QA4BHBcBGQARAOAMAMQANAMAHAIQAVAbAHAlQAQBdhDBtQgiA4g6A9IgVAWQhKBLhDAoQhjA8hgAAIgMAAg");
	this.shape_31.setTransform(68.8,65.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF6600").ss(3).p("ApfBOQAEg2AXgrQAXgjANgMQAVgTAbgRQBFgmAlgrQAegjASguQAHgSAFgTQAVhQAigrQAfgqAqggQAfgXAmgSQAUgLAWgIQARgGARgFQBfgeBMAeQAFADAFACQAZAMASAUQAFAFAFAGQADAFADAEQATAaAYBAQARArAQAiQAJAVAJARQAmBIA1A+QA5BFBhBDQASANANAMQAOALAIAIQAWAaAIAlQATBbhFBvQghA2g6A+QgLALgKAKQhKBMhCAoQhpBBhlgFQgJAAgIgBQgwgGgigVQgagPgkgjQhUhNhUg0QgMgIgMgGQgSgKgWgLQhJgkhogkQgvgPgXgRQAAAAgBgBQgXgQgPgYQgFgHgEgJQgVgtAFg7g");
	this.shape_32.setTransform(68.9,64.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF9900").s().p("ABhJJIgRgBQgwgGgigVQgagPgkgjQhUhNhUg0IgYgOIgogVQhJgkhogkQgvgPgXgRIgBgBQgXgQgPgYIgJgQQgVgtAFg7QAEg2AXgrQAXgjANgMQAVgTAbgRQBFgmAlgrQAegjASguQAHgSAFgTQAVhQAigrQAfgqAqggQAfgXAmgSQAUgLAWgIIAigLQBfgeBMAeIAKAFQAZAMASAUIAKALIAGAJQATAaAYBAQARArAQAiIASAmQAmBIA1A+QA5BFBhBDQASANANAMQAOALAIAIQAWAaAIAlQATBbhFBvQghA2g6A+IgVAVQhKBMhCAoQhiA8hfAAIgNAAg");
	this.shape_33.setTransform(68.9,64.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF6600").ss(3).p("ApgBSQAEg2AYgqQAYgiAOgMQAVgSAcgQQBIgkAlgqQAegiARgvQAGgSAFgTQAThSAggsQAegqApghQAegYAlgTQAUgLAWgJQARgGAQgGQBgggBLAfQAFADAFACQAZAMASAVQAFAFAEAGQADAFADAEQASAaAWBCQAQAsAPAiQAJAWAIARQAlBHA2A+QA6BCBnBBQATAMAOALQAOALAIAHQAYAaAJAkQAVBahFBvQgiA2g6A/QgKAKgKALQhLBLhAApQhpBBhkgFQgJAAgIgBQgwgHgjgVQgXgQgkgkQhShRhVgyQgMgHgMgHQgRgJgWgKQhJgihtggQgwgOgXgQQgBAAAAAAQgZgPgPgYQgFgIgEgIQgWgtAFg7g");
	this.shape_34.setTransform(68.9,64.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF9900").s().p("ABlJGIgRgBQgwgHgjgVQgXgQgkgkQhShRhVgyIgYgOQgRgJgWgKQhJgihtggQgwgOgXgQIgBAAQgZgPgPgYIgJgQQgWgtAFg7QAEg2AYgqQAYgiAOgMQAVgSAcgQQBIgkAlgqQAegiARgvQAGgSAFgTQAThSAggsQAegqApghQAegYAlgTQAUgLAWgJIAhgMQBgggBLAfIAKAFQAZAMASAVQAFAFAEAGIAGAJQASAaAWBCQAQAsAPAiIARAnQAlBHA2A+QA6BCBnBBQATAMAOALQAOALAIAHQAYAaAJAkQAVBahFBvQgiA2g6A/IgUAVQhLBLhAApQhiA9hdAAIgOgBg");
	this.shape_35.setTransform(68.9,64.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF6600").ss(3).p("AphBYQAEg2AagqQAYghAPgMQAVgRAegPQBKgjAlgoQAdgiARgwQAGgSAEgTQAQhUAegsQAdgrApgiQAdgZAlgUQATgLAWgJQARgHAQgGQBgghBKAeQAFADAFACQAYANASAVQAFAFAEAGQADAFADAFQAQAaAVBEQAPAtAOAiQAIAVAJARQAjBIA3A9QA7BABsA9QAUAMAPAKQAPALAJAHQAaAYAJAlQAXBYhFBxQgiA1g6A+QgKALgLAKQhKBNg/AoQhqBDhigGQgIgBgJgBQgwgGgigXQgXgQgjgmQhRhThUgxQgMgHgMgGQgSgKgWgJQhIgfhxgdQgygNgYgOQgBAAAAAAQgagPgQgXQgEgHgFgIQgXgtAGg6g");
	this.shape_36.setTransform(69,63.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF9900").s().p("ABpJEIgRgCQgwgGgigXQgXgQgjgmQhRhThUgxIgYgNQgSgKgWgJQhIgfhxgdQgygNgYgOIgBAAQgagPgQgXIgJgPQgXgtAGg6QAEg2AagqQAYghAPgMQAVgRAegPQBKgjAlgoQAdgiARgwQAGgSAEgTQAQhUAegsQAdgrApgiQAdgZAlgUQATgLAWgJQARgHAQgGQBgghBKAeIAKAFQAYANASAVIAJALIAGAKQAQAaAVBEQAPAtAOAiQAIAVAJARQAjBIA3A9QA7BABsA9IAjAWQAPALAJAHQAaAYAJAlQAXBYhFBxQgiA1g6A+IgVAVQhKBNg/AoQhiA9hbAAIgPAAg");
	this.shape_37.setTransform(69,63.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF6600").ss(3).p("AJdA+QAaBXhHBxQgmA+hKBLQhKBMg+ApQhqBDhhgGQgIgBgJgBQgugGgjgYQgBgBgBAAQgUgQgjgnQhPhWhUgwQgMgHgMgGQhNgmiYghQg0gMgZgMQAAAAgBgBQgigRgSgiQgYgsAGg7QAFg1AagqQAOgYAagTQAXgRAegOQBNghAkgnQAqguAMhKQAOhVAdgtQAbgsAogjQAdgZAkgVQAUgLAVgKQB0g2BWAkQAFADAFACQAYANASAVQAEAGAEAGQADAFADAFQAOAaAUBGQAWBLAVAsQAiBIA4A7QA8A/ByA6QArAWATAPQAbAYAKAkg");
	this.shape_38.setTransform(69,63.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF9900").s().p("ABtJBIgRgCQgugGgjgYIgCgBQgUgQgjgnQhPhWhUgwIgYgNQhNgmiYghQg0gMgZgMIgBgBQgigRgSgiQgYgsAGg7QAFg1AagqQAOgYAagTQAXgRAegOQBNghAkgnQAqguAMhKQAOhVAdgtQAbgsAogjQAdgZAkgVQAUgLAVgKQB0g2BWAkIAKAFQAYANASAVIAIAMIAGAKQAOAaAUBGQAWBLAVAsQAiBIA4A7QA8A/ByA6QArAWATAPQAbAYAKAkQAaBXhHBxQgmA+hKBLQhKBMg+ApQhhA+haAAIgQgBg");
	this.shape_39.setTransform(69,63.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF6600").ss(3).p("AphBYQAEg2AagqQAYghAPgMQAVgRAegPQBLgiAkgpQAeghAQgwQAGgSAEgUQAQhTAegtQAdgrApgiQAdgZAlgUQATgLAWgJQARgHAQgGQBfgiBLAfQAFADAFACQAYANASAVQAFAFAEAGQADAFADAFQAQAaAVBEQAOAtAOAiQAJAWAIARQAjBHA4A9QA6BABtA9QAUAMAPAKQAPAKAJAHQAaAZAJAlQAYBYhGBwQgiA1g6A/QgKALgKAKQhLBMg/ApQhpBChjgFQgIgBgJgBQgvgHgjgWQgWgRgkglQhQhUhUgxQgMgHgMgGQgSgJgWgKQhJgfhxgcQgygNgYgOQAAAAgBAAQgagPgQgXQgEgHgFgIQgXgtAGg6g");
	this.shape_40.setTransform(69,63.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF9900").s().p("ABpJEIgRgCQgvgHgjgWQgWgRgkglQhQhUhUgxIgYgNIgogTQhJgfhxgcQgygNgYgOIgBAAQgagPgQgXIgJgPQgXgtAGg6QAEg2AagqQAYghAPgMQAVgRAegPQBLgiAkgpQAeghAQgwQAGgSAEgUQAQhTAegtQAdgrApgiQAdgZAlgUQATgLAWgJIAhgNQBfgiBLAfIAKAFQAYANASAVIAJALIAGAKQAQAaAVBEQAOAtAOAiQAJAWAIARQAjBHA4A9QA6BABtA9QAUAMAPAKQAPAKAJAHQAaAZAJAlQAYBYhGBwQgiA1g6A/IgUAVQhLBMg/ApQhhA9hcAAIgPAAg");
	this.shape_41.setTransform(69,63.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF6600").ss(3).p("ApgBTQAEg2AYgqQAYgiAOgMQAVgSAdgQQBIgkAkgqQAegiARgvQAHgSAEgTQAThSAggsQAdgqAqghQAegZAlgTQAUgKAWgJQAQgHARgFQBgggBKAfQAGACAFACQAYANASAUQAFAFAEAGQADAFAEAFQARAaAWBCQAQAsAPAiQAJAVAIARQAlBIA2A9QA6BDBnBAQATAMAOALQAPALAIAHQAYAZAJAlQAVBahFBvQghA2g7A+QgKALgKAKQhKBMhBApQhpBBhkgFQgIAAgJgBQgvgHgjgVQgYgQgkglQhShQhUgyQgMgIgMgGQgSgKgVgKQhJghhtggQgwgOgYgPQgBAAAAgBQgZgPgPgYQgFgHgEgIQgWgtAFg7g");
	this.shape_42.setTransform(68.9,64.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF9900").s().p("ABlJGIgRgBQgvgHgjgVQgYgQgkglQhShQhUgyIgYgOIgngUQhJghhtggQgwgOgYgPIgBgBQgZgPgPgYIgJgPQgWgtAFg7IAAAAQAEg2AYgqQAYgiAOgMQAVgSAdgQQBIgkAkgqQAegiARgvQAHgSAEgTQAThSAggsQAdgqAqghQAegZAlgTQAUgKAWgJIAhgMQBgggBKAfIALAEQAYANASAUIAJALIAHAKQARAaAWBCQAQAsAPAiIARAmQAlBIA2A9QA6BDBnBAQATAMAOALQAPALAIAHQAYAZAJAlQAVBahFBvQghA2g7A+IgUAVQhKBMhBApQhiA9hdAAIgOgBg");
	this.shape_43.setTransform(68.9,64.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF6600").ss(3).p("ApfBOQAEg2AXgrQAXgiAOgMQAUgTAcgQQBFgnAlgrQAegiASgvQAHgRAFgTQAUhRAigrQAfgpAqghQAfgXAlgTQAUgKAWgIQARgHARgFQBggeBLAfQAGACAFACQAYAMATAUQAEAGAFAGQADAEADAFQATAaAYBAQAQArAQAiQAKAVAIARQAmBIA1A+QA6BEBiBDQASANANAMQANALAIAIQAXAaAIAkQATBbhEBvQgiA2g6A/QgKAKgLALQhKBLhBApQhqBAhlgEQgIgBgJgBQgvgGgigVQgagPgkgjQhUhOhUgzQgMgIgMgHQgSgKgWgKQhIgkhqgjQgugPgXgRQgBAAAAAAQgYgQgPgYQgFgIgEgIQgVguAFg6g");
	this.shape_44.setTransform(68.9,64.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF9900").s().p("ABhJJIgRgCQgvgGgigVQgagPgkgjQhUhOhUgzIgYgPQgSgKgWgKQhIgkhqgjQgugPgXgRIgBAAQgYgQgPgYIgJgQQgVguAFg6IAAgBQAEg2AXgrQAXgiAOgMQAUgTAcgQQBFgnAlgrQAegiASgvIAMgkQAUhRAigrQAfgpAqghQAfgXAlgTQAUgKAWgIIAigMQBggeBLAfIALAEQAYAMATAUIAJAMIAGAJQATAaAYBAQAQArAQAiIASAmQAmBIA1A+QA6BEBiBDQASANANAMQANALAIAIQAXAaAIAkQATBbhEBvQgiA2g6A/IgVAVQhKBLhBApQhjA8hfAAIgNAAg");
	this.shape_45.setTransform(68.9,64.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF6600").ss(3).p("ApfBJQAEg2AXgrQAWgkANgMQAUgUAagRQBDgoAmgsQAdgjAUguQAHgRAGgTQAWhPAkgrQAggoAqggQAggWAlgSQAVgKAWgIQARgGARgFQBggcBMAeQAGADAFACQAYAMATATQAFAFAEAGQAEAFADAEQAVAaAYA+QASArARAiQAJAUAKASQAmBHA1A/QA4BGBdBGQARAOAMAMQANALAIAJQAVAbAHAkQARBdhEBtQgiA4g6A+QgKAKgKALQhLBLhCAoQhpBAhngEQgIgBgJgBQgwgFghgUQgcgPgkgiQhVhLhVg1QgMgHgMgHQgRgLgWgKQhJgnhlgmQgtgRgXgSQAAAAAAgBQgYgQgOgZQgEgHgEgJQgVguAEg7g");
	this.shape_46.setTransform(68.8,65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF9900").s().p("ABdJLIgRgCQgwgFghgUQgcgPgkgiQhVhLhVg1IgYgOQgRgLgWgKQhJgnhlgmQgtgRgXgSIAAgBQgYgQgOgZIgIgQQgVguAEg7QAEg2AXgrQAWgkANgMQAUgUAagRQBDgoAmgsQAdgjAUguQAHgRAGgTQAWhPAkgrQAggoAqggQAggWAlgSQAVgKAWgIQARgGARgFQBggcBMAeIALAFQAYAMATATIAJALIAHAJQAVAaAYA+QASArARAiIATAmQAmBHA1A/QA4BGBdBGQARAOAMAMQANALAIAJQAVAbAHAkQARBdhEBtQgiA4g6A+IgUAVQhLBLhCAoQhiA8hgAAIgOAAg");
	this.shape_47.setTransform(68.8,65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF6600").ss(3).p("ApeBEQAEg2AWgsQAVgjANgNQATgVAZgSQBBgqAlgtQAegjAUguQAIgRAGgSQAZhNAlgrQAhgnAsgfQAggWAmgRQAUgJAXgIQARgGARgEQBggbBNAeQAFADAGACQAYAMATATQAFAFAFAFQADAFAEAEQAWAaAaA8QATAqARAiQAKAUAKARQAoBHAzBBQA4BIBXBJQAQAOAMANQAMALAHAKQAUAbAGAlQAPBdhDBtQgjA4g5A+QgKALgLAKQhKBLhEAoQhpA/hngDQgJgBgJgBQgwgFgigTQgcgPglggQhWhIhVg3QgMgHgMgIQgSgKgVgLQhJgphigqQgrgSgWgTQAAgBgBAAQgWgSgOgYQgEgIgEgJQgUguAEg7g");
	this.shape_48.setTransform(68.8,65.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF9900").s().p("ABaJOIgSgCQgwgFgigTQgcgPglggQhWhIhVg3IgYgPIgngVQhJgphigqQgrgSgWgTIgBgBQgWgSgOgYIgIgRQgUguAEg7IAAgBQAEg2AWgsQAVgjANgNQATgVAZgSQBBgqAlgtQAegjAUguQAIgRAGgSQAZhNAlgrQAhgnAsgfQAggWAmgRQAUgJAXgIIAigKQBggbBNAeIALAFQAYAMATATIAKAKIAHAJQAWAaAaA8QATAqARAiQAKAUAKARQAoBHAzBBQA4BIBXBJQAQAOAMANQAMALAHAKQAUAbAGAlQAPBdhDBtQgjA4g5A+IgVAVQhKBLhEAoQhkA8hiAAIgKAAg");
	this.shape_49.setTransform(68.8,65.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF6600").ss(3).p("ApdBAQAEg3AVgsQAUgkAMgOQASgVAZgTQA+grAmgvQAegjAVgtQAIgSAHgSQAbhLAngqQAignAsgdQAhgWAmgQQAVgJAWgHQASgGARgEQBggZBOAfQAFACAFACQAZAMAUASQAFAFAEAFQAEAFADAEQAYAZAbA7QAUApATAiQAKAUAKARQApBHAyBBQA3BKBSBMQAQAPAKANQAMALAGALQASAcAGAlQAMBfhCBsQgiA5g6A9QgKALgLAKQhKBLhFAoQhpA+hogDQgJAAgJgBQgwgFgjgSQgdgOgkgfQhYhGhWg3QgMgIgMgIQgRgLgVgLQhJgshegtQgqgTgVgVIgBgBQgVgSgOgZQgEgIgDgJQgUgvAEg7g");
	this.shape_50.setTransform(68.7,65.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF9900").s().p("ABWJQIgSgBQgwgFgjgSQgdgOgkgfQhYhGhWg3IgYgQIgmgWQhJgshegtQgqgTgVgVIgBgBQgVgSgOgZIgHgRQgUgvAEg7IAAAAQAEg3AVgsQAUgkAMgOQASgVAZgTQA+grAmgvQAegjAVgtQAIgSAHgSQAbhLAngqQAignAsgdQAhgWAmgQQAVgJAWgHIAjgKQBggZBOAfIAKAEQAZAMAUASIAJAKIAHAJQAYAZAbA7QAUApATAiIAUAlQApBHAyBBQA3BKBSBMQAQAPAKANQAMALAGALQASAcAGAlQAMBfhCBsQgiA5g6A9IgVAVQhKBLhFAoQhkA7hkAAIgJAAg");
	this.shape_51.setTransform(68.7,65.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF6600").ss(3).p("ApcA7QADg3AUgsQATglAMgOQARgWAYgUQA8gtAmgvQAegkAWgtQAJgRAHgSQAdhJApgqQAjgmAtgdQAhgUAngQQAVgJAWgGQASgGASgEQBggXBOAfQAGACAFACQAYAMAVASQAFAEAEAFQAEAFADAEQAaAZAcA5QAVAoAUAiQALAUAKARQAqBHAxBCQA2BMBNBPQAOAPAKAOQALALAGAMQARAdAEAkQALBhhCBrQgjA5g5A+QgKAKgLALQhKBKhGAoQhpA9hqgCQgJgBgIgBQgwgEgkgSQgegNglgdQhZhDhWg5QgMgIgMgIQgRgLgUgMQhKguhagwQgogVgVgXQAAAAAAAAQgVgTgNgaQgEgIgDgJQgTgvAEg7g");
	this.shape_52.setTransform(68.7,66.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF9900").s().p("ABRJTIgRgCQgwgEgkgSQgegNglgdQhZhDhWg5IgYgQIglgXQhKguhagwQgogVgVgXIAAAAQgVgTgNgaIgHgRQgTgvAEg7IAAgBQADg3AUgsQATglAMgOQARgWAYgUQA8gtAmgvQAegkAWgtQAJgRAHgSQAdhJApgqQAjgmAtgdQAhgUAngQQAVgJAWgGIAkgKQBggXBOAfIALAEQAYAMAVASIAJAJIAHAJQAaAZAcA5IApBKIAVAlQAqBHAxBCQA2BMBNBPQAOAPAKAOQALALAGAMQARAdAEAkQALBhhCBrQgjA5g5A+IgVAVQhKBKhGAoQhlA7hlAAIgJAAg");
	this.shape_53.setTransform(68.7,66.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF6600").ss(3).p("ApbA2QADg2ATgtQASgmALgOQARgXAXgUQA5gwAngwQAdglAYgsQAJgRAIgRQAfhIAqgpQAlglAtgcQAigUAngPQAVgIAXgGQASgGASgDQBggVBPAeQAFACAGACQAYALAVASQAFAEAFAGQAEAEADAEQAbAZAeA3QAWAnAUAiQAMAUAKARQArBGAwBDQA2BOBHBSQAOAQAJAPQAKALAFAMQAPAeAEAlQAIBihABqQgjA6g6A9QgKALgLAKQhKBKhHAoQhpA8hrgCQgJAAgIgBQgwgEgkgRQgfgMglgdQhbhAhWg6QgMgIgMgIQgSgMgUgMQhJgxhXgzQgmgWgUgYIgBgBQgTgUgNgaQgDgIgEgJQgSgwAEg7g");
	this.shape_54.setTransform(68.7,66.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF9900").s().p("ABNJVIgRgBQgwgEgkgRQgfgMglgdQhbhAhWg6IgYgQIgmgYQhJgxhXgzQgmgWgUgYIgBgBQgTgUgNgaIgHgRQgSgwAEg7IAAgBQADg2ATgtQASgmALgOQARgXAXgUQA5gwAngwQAdglAYgsIARgiQAfhIAqgpQAlglAtgcQAigUAngPQAVgIAXgGQASgGASgDQBggVBPAeIALAEQAYALAVASIAKAKIAHAIQAbAZAeA3IAqBJIAWAlQArBGAwBDQA2BOBHBSQAOAQAJAPQAKALAFAMQAPAeAEAlQAIBihABqQgjA6g6A9IgVAVQhKBKhHAoQhmA6hnAAIgHAAg");
	this.shape_55.setTransform(68.7,66.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF6600").ss(3).p("ApbAyQADg1ASgwQASgmAKgPQARgXAVgVQA3gyAngxQAdglAZgsQAJgQAJgRQAhhHAsgoQAmgkAugbQAigUAogOQAVgIAXgGQASgEASgEQBggTBQAeQAGACAFACQAZALAVARQAFAFAFAFQAEAEADADQAdAaAfA1QAXAmAVAiQAMATALASQAsBGAvBEQA1BQBCBVQAMAQAJAQQAJALAFANQANAeAEAlQAGBjhABqQgkA6g5A9QgKALgLAKQhKBKhIAoQhpA7hsgBQgJgBgJAAQgwgEgkgQQgggMgmgbQhbg9hXg8QgMgIgMgJQgSgMgTgMQhKgzhTg3QgkgYgUgZQAAAAAAAAQgTgVgMgaQgEgJgDgJQgRgwADg7g");
	this.shape_56.setTransform(68.7,66.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF9900").s().p("ABJJYIgSgBQgwgEgkgQQgggMgmgbIiyh5IgYgRIglgYQhKgzhTg3QgkgYgUgZIAAAAQgTgVgMgaIgHgSQgRgwADg7IAAgBQADg1ASgwQASgmAKgPQARgXAVgVQA3gyAngxQAdglAZgsIASghQAhhHAsgoQAmgkAugbQAigUAogOQAVgIAXgGIAkgIQBggTBQAeIALAEQAZALAVARIAKAKIAHAHQAdAaAfA1IAsBIIAXAlQAsBGAvBEQA1BQBCBVQAMAQAJAQQAJALAFANQANAeAEAlQAGBjhABqQgkA6g5A9IgVAVQhKBKhIAoQhmA6hqAAIgFAAg");
	this.shape_57.setTransform(68.7,66.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF6600").ss(3).p("ApaAtQACg1ARgwQARgoAKgOQAQgZAVgWQA0gzAngyQAdglAagsQAKgQAJgRQAjhFAugoQAngjAvgaQAjgTAogNQAVgIAYgFQASgFASgDQBggRBRAeQAFACAFACQAZALAWAQQAFAFAFAEQAEAEAEAEQAeAZAgA0QAYAlAXAiQAMATALARQAtBGAuBFQA0BSA9BYQALARAIAQQAIAMAEANQANAfACAlQAEBlg/BpQgkA7g5A8QgKALgLAKQhKBKhJAoQhpA6hugBQgIAAgJgBQgwgDglgPQghgMgmgZQhdg7hXg9QgMgJgMgIQgRgNgUgNQhJg1hQg6QgjgZgSgbQgBAAAAAAQgSgWgLgbQgEgIgDgJQgQgxADg7g");
	this.shape_58.setTransform(68.7,67.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF9900").s().p("ABEJaIgRgBQgwgDglgPQghgMgmgZQhdg7hXg9IgYgRIglgaIiZhvQgjgZgSgbIgBAAQgSgWgLgbIgHgRQgQgxADg7IAAgBQACg1ARgwQARgoAKgOQAQgZAVgWQA0gzAngyQAdglAagsIATghQAjhFAugoQAngjAvgaQAjgTAogNQAVgIAYgFQASgFASgDQBggRBRAeIAKAEQAZALAWAQIAKAJIAIAIQAeAZAgA0IAvBHIAXAkIBbCLQA0BSA9BYQALARAIAQQAIAMAEANQANAfACAlQAEBlg/BpQgkA7g5A8IgVAVQhKBKhJAoQhmA5hrAAIgGAAg");
	this.shape_59.setTransform(68.7,67.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF6600").ss(3).p("ApaAoQADg1AQgwQAQgoAKgPQAOgZAVgXQAxg1Aog0QAdglAbgrQAKgQAJgRQAmhDAvgnQAogjAwgZQAkgSAogNQAWgHAXgFQATgEASgDQBggQBRAeQAGACAFADQAZAKAWAQQAFAEAFAFQAEADAEAEQAgAZAhAzQAZAjAYAiQAMATAMARQAvBGAsBGQA0BTA3BbQALASAHARQAHANADANQAMAgABAlQACBmg/BoQgkA8g5A8QgKALgLAKQhJBJhLAoQhpA6hvgBQgIAAgJgBQgvgDgngOQgigLglgYQhfg5hXg+QgMgJgMgIQgSgNgTgNQhJg4hNg+QghgagSgcQAAAAAAgBQgRgWgLgbQgDgIgDgJQgQgzACg7g");
	this.shape_60.setTransform(68.6,67.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF9900").s().p("ABAJdIgRgBQgvgDgngOQgigLglgYQhfg5hXg+IgYgRIglgaQhJg4hNg+QghgagSgcIAAgBQgRgWgLgbIgGgRQgQgzACg7IAAgBQADg1AQgwQAQgoAKgPQAOgZAVgXQAxg1Aog0QAdglAbgrIATghQAmhDAvgnQAogjAwgZQAkgSAogNQAWgHAXgFQATgEASgDQBggQBRAeIALAFQAZAKAWAQIAKAJIAIAHQAgAZAhAzIAxBFIAYAkIBbCMIBrCuQALASAHARQAHANADANQAMAgABAlQACBmg/BoQgkA8g5A8IgVAVQhJBJhLAoQhnA5htAAIgEAAg");
	this.shape_61.setTransform(68.6,67.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF6600").ss(3).p("ApZAkQACg2APgxQAQgoAJgQQAOgZATgYQAvg3Aog0QAdgmAcgrQAKgQAKgQQAohBAxgnQApgiAxgYQAkgSApgMQAWgGAXgFQATgEATgCQBggPBSAeQAFACAFADQAaAKAWAQQAFAEAFAEQAEADAEAEQAiAZAiAxQAaAiAZAiQANATAMARQAwBGArBGQAzBWAyBeQAJASAHASQAGANADAOQAKAgABAlQgBBng+BoQgkA8g5A8QgKALgLAKQhJBJhMAoQhpA5hwgBQgJAAgJAAQgugDgogNQgjgLgmgWQhgg2hXhAQgMgJgMgJQgSgMgSgOQhKg6hJhBQgfgcgRgdQgBgBAAAAQgQgXgKgcQgEgIgCgJQgPgzACg7g");
	this.shape_62.setTransform(68.6,67.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF9900").s().p("AA8JfIgSAAQgugDgogNQgjgLgmgWQhgg2hXhAIgYgSIgkgaQhKg6hJhBQgfgcgRgdIgBgBQgQgXgKgcIgGgRQgPgzACg7IAAgBQACg2APgxQAQgoAJgQQAOgZATgYQAvg3Aog0QAdgmAcgrIAUggQAohBAxgnQApgiAxgYQAkgSApgMQAWgGAXgFIAmgGQBggPBSAeIAKAFQAaAKAWAQIAKAIIAIAHQAiAZAiAxIAzBEIAZAkQAwBGArBGQAzBWAyBeQAJASAHASQAGANADAOQAKAgABAlQgBBng+BoQgkA8g5A8IgVAVQhJBJhMAoQhoA4hvAAIgCAAg");
	this.shape_63.setTransform(68.6,67.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF6600").ss(3).p("ApZAfQACg1APgyQAOgpAJgQQANgaASgZQAsg4Apg2QAdgnAdgpQALgQALgQQAphAAzgnQArggAxgXQAkgSApgLQAXgGAYgEQASgEATgCQBggMBTAdQAFADAGACQAZAKAWAPQAGAEAFAEQAFADAEAEQAjAZAjAvQAbAiAaAhQANATAMARQAxBFArBIQAyBXAtBhQAIATAGATQAFANADAPQAIAhAAAkQgDBpg9BnQgkA9g5A7QgKALgLALQhKBIhMAoQhpA4hyAAQgIAAgJAAQgvgDgogMQgkgKgmgWQhhgzhYhBQgMgJgMgJQgSgNgSgOQhKg9hFhEQgdgdgRgfQAAAAgBgBQgPgYgKgbQgDgJgCgJQgPg0ACg7g");
	this.shape_64.setTransform(68.6,68.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF9900").s().p("AAmJiQgvgDgogMQgkgKgmgWQhhgzhYhBIgYgSIgkgbQhKg9hFhEQgdgdgRgfIgBgBQgPgYgKgbIgFgSQgPg0ACg7IAAgBQACg1APgyQAOgpAJgQQANgaASgZIBVhuQAdgnAdgpIAWggQAphAAzgnQArggAxgXQAkgSApgLQAXgGAYgEQASgEATgCQBggMBTAdIALAFQAZAKAWAPIALAIIAJAHQAjAZAjAvIA1BDIAZAkQAxBFArBIQAyBXAtBhQAIATAGATQAFANADAPQAIAhAAAkQgDBpg9BnQgkA9g5A7IgVAWQhKBIhMAoQhpA4hyAAIgRAAg");
	this.shape_65.setTransform(68.6,68.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF6600").ss(3).p("ApYAaQABg1AOgyQAOgqAIgQQAMgbARgaQAqg6Apg3QAdgnAegpQALgQAMgPQArg/A1gmQAsggAxgWQAmgQApgLQAXgFAYgEQATgEATgBQBggLBTAdQAGADAFACQAaAKAWAOQAGAEAFAEQAFADAEAEQAlAZAkAtQAcAhAbAhQAOASAMASQAyBFAqBIQAxBaAoBkQAHATAFAUQAEANADAPQAGAiAAAlQgFBqg9BmQglA9g4A8QgKALgLAKQhKBIhOAoQhoA3hzAAQgJAAgJAAQgugCgpgMQglgJgmgUQhjgwhYhDQgMgJgMgJQgSgOgSgOQhKg/hBhIQgcgegQggQAAgBAAAAQgPgZgJgcQgDgJgCgJQgOg0ACg7g");
	this.shape_66.setTransform(68.6,68.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF9900").s().p("AAhJkQgugCgpgMQglgJgmgUQhjgwhYhDIgYgSIgkgcQhKg/hBhIQgcgegQggIAAgBQgPgZgJgcIgFgSQgOg0ACg7IAAgCQABg1AOgyQAOgqAIgQQAMgbARgaQAqg6Apg3IA7hQIAXgfQArg/A1gmQAsggAxgWQAmgQApgLQAXgFAYgEQATgEATgBQBggLBTAdIALAFQAaAKAWAOIALAIIAJAHQAlAZAkAtIA3BCIAaAkQAyBFAqBIQAxBaAoBkQAHATAFAUQAEANADAPQAGAiAAAlQgFBqg9BmQglA9g4A8IgVAVQhKBIhOAoQhoA3hzAAIgSAAg");
	this.shape_67.setTransform(68.6,68.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF6600").ss(3).p("ApYAWQABg2ANgyQANgrAHgRQAMgbAQgbQAng8Aqg4QAdgnAfgpQAMgPALgQQAug8A3gmQAsgfAzgVQAmgQApgJQAXgGAYgDQAUgDATgCQBggJBUAeQAGACAFACQAaAKAXAOQAFADAGAEQAEADAEAEQAnAYAmAsQAdAgAcAhQAOASANASQAzBFAoBJQAxBbAiBnQAGAUAEAUQAEAOACAQQAFAjgBAkQgIBsg8BlQgkA+g5A7QgKALgLALQhJBHhPAoQhpA2h0ABQgJAAgJAAQgugCgpgLQgmgIgngTQhkguhZhDQgMgKgMgJQgRgOgSgPQhKhCg9hLQgagfgQgiQAAAAAAgBQgOgZgJgdQgCgJgDgJQgNg1ACg7g");
	this.shape_68.setTransform(68.7,68.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF9900").s().p("AAcJnQgugCgpgLQgmgIgngTQhkguhZhDIgYgTIgjgdQhKhCg9hLQgagfgQgiIAAgBQgOgZgJgdIgFgSQgNg1ACg7IAAgBQABg2ANgyQANgrAHgRQAMgbAQgbQAng8Aqg4IA8hQIAXgfQAug8A3gmQAsgfAzgVQAmgQApgJQAXgGAYgDIAngFQBggJBUAeIALAEQAaAKAXAOIALAHIAIAHQAnAYAmAsQAdAgAcAhIAbAkQAzBFAoBJQAxBbAiBnQAGAUAEAUQAEAOACAQQAFAjgBAkQgIBsg8BlQgkA+g5A7IgVAWQhJBHhPAoQhpA2h0ABIgSAAg");
	this.shape_69.setTransform(68.7,68.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF6600").ss(3).p("ApYARQABg2AMgzQAMgrAHgRQALgdAQgbQAkg9Aqg6QAdgnAggoQAMgQAMgPQAwg7A5glQAtgeA0gUQAmgQAqgIQAXgGAZgDQATgCATgCQBhgHBUAeQAGACAFACQAaAKAXANQAGAEAGADQAEADAFADQAoAZAnAqQAeAfAdAhQAOASANARQA1BFAnBLQAwBdAdBqQAFAUADAVQADAPABAQQAEAjgCAkQgJBtg8BlQglA+g4A7QgKALgLALQhJBHhRAoQhoA1h1ACQgJAAgJAAQgvgCgqgKQgmgIgngRQhmgrhZhFQgMgKgMgKQgRgOgRgPQhKhEg6hPQgZghgPgjIAAAAQgNgbgIgdQgDgJgCgJQgMg1ABg7g");
	this.shape_70.setTransform(68.7,69.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF9900").s().p("AAYJqQgvgCgqgKQgmgIgngRQhmgrhZhFIgYgUIgigdQhKhEg6hPQgZghgPgjIAAAAQgNgbgIgdIgFgSQgMg1ABg7IAAgCQABg2AMgzQAMgrAHgRQALgdAQgbQAkg9Aqg6QAdgnAggoIAYgfQAwg7A5glQAtgeA0gUQAmgQAqgIQAXgGAZgDIAmgEQBhgHBUAeIALAEQAaAKAXANIAMAHIAJAGQAoAZAnAqQAeAfAdAhIAbAjQA1BFAnBLQAwBdAdBqQAFAUADAVQADAPABAQQAEAjgCAkQgJBtg8BlQglA+g4A7IgVAWQhJBHhRAoQhoA1h1ACIgSAAg");
	this.shape_71.setTransform(68.7,69.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF6600").ss(3).p("ApYANQABg2ALgzQALgsAGgSQALgdAOgcQAihAAqg6QAdgoAhgoQANgPANgPQAyg5A6gkQAvgeA0gTQAngPAqgIQAYgFAYgCQAUgDAUgBQBggFBVAdQAGACAFADQAaAJAYANQAGADAFAEQAFADAEADQAqAYAoAoQAgAeAdAiQAPARAOASQA1BEAmBMQAvBfAYBtQAEAVADAVQACAPABARQACAkgDAkQgMBvg6BjQglBAg4A6QgLALgLALQhJBHhSAoQhoA0h2ACQgJAAgJAAQgvgBgqgJQgogIgngQQhngohZhHQgMgJgMgKQgRgPgRgQQhLhGg2hSQgXgigOglQAAAAAAgBQgMgbgIgdQgCgJgCgKQgMg1ABg8g");
	this.shape_72.setTransform(68.7,69.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF9900").s().p("AATJtQgvgBgqgJQgogIgngQQhngohZhHIgYgTIgigfQhLhGg2hSQgXgigOglIAAgBQgMgbgIgdIgEgTQgMg1ABg8IAAgBQABg2ALgzQALgsAGgSQALgdAOgcQAihAAqg6QAdgoAhgoIAageQAyg5A6gkQAvgeA0gTQAngPAqgIQAYgFAYgCQAUgDAUgBQBggFBVAdIALAFQAaAJAYANIALAHIAJAGQAqAYAoAoQAgAeAdAiIAdAjQA1BEAmBMQAvBfAYBtQAEAVADAVQACAPABARQACAkgDAkQgMBvg6BjQglBAg4A6IgWAWQhJBHhSAoQhoA0h2ACIgSAAg");
	this.shape_73.setTransform(68.7,69.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF6600").ss(3).p("ApYAIQAAg2ALg0QAKgsAGgSQAKgeANgdQAghBAqg8QAdgoAignQANgQAOgOQA0g4A8gkQAwgcA0gTQAogNArgIQAXgEAZgCQAUgDAUAAQBggEBWAdQAGADAFACQAaAJAYAMQAGAEAGADQAFADAEADQAsAYApAmQAgAeAfAhQAPARAOASQA2BEAmBMQAuBhASBwQAEAWABAWQACAPAAARQABAlgEAlQgOBvg6BjQglBAg4A7QgKALgLAKQhKBHhSAoQhoAzh4ACQgJAAgJAAQgvAAgrgJQgogHgngOQhpgmhahIQgMgJgMgLQgRgPgRgQQhKhJgyhVQgWgjgNgmQAAgBAAAAQgMgcgHgeQgCgJgCgKQgLg2ABg7g");
	this.shape_74.setTransform(68.8,69.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF9900").s().p("AAOJvQgvAAgrgJQgogHgngOQhpgmhahIIgYgUIgigfQhKhJgyhVQgWgjgNgmIAAgBQgMgcgHgeIgEgTQgLg2ABg7IAAgCQAAg2ALg0QAKgsAGgSQAKgeANgdQAghBAqg8QAdgoAignIAbgeQA0g4A8gkQAwgcA0gTQAogNArgIQAXgEAZgCQAUgDAUAAQBggEBWAdIALAFQAaAJAYAMIAMAHIAJAGQAsAYApAmQAgAeAfAhIAdAjQA2BEAmBMQAuBhASBwQAEAWABAWQACAPAAARQABAlgEAlQgOBvg6BjQglBAg4A7IgVAVQhKBHhSAoQhoAzh4ACIgSAAg");
	this.shape_75.setTransform(68.8,69.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF6600").ss(3).p("ApZAEQABg2AJg0QAJguAGgSQAJgfAMgdQAdhEArg8QAdgpAjgnQAOgPAOgOQA2g2A+gjQAxgcA1gRQAogOArgGQAYgEAZgCQAUgCAUAAQBhgCBWAdQAGACAFACQAaAJAZAMQAGADAGAEQAFACAEADQAtAYArAlQAhAcAgAiQAPAQAOASQA4BEAkBNQAuBjANBzQACAXABAWQABAQAAASQgBAlgFAkQgQByg5BhQglBBg4A6QgLALgLALQhJBGhTAoQhpAyh5ADQgJABgJAAQgvgBgrgHQgpgHgogNQhqgjhahJQgMgKgMgKQgRgQgQgQQhLhMguhYQgUglgNgnQAAgBAAAAQgKgdgHgeQgCgJgCgKQgKg3AAg7g");
	this.shape_76.setTransform(68.9,70.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF9900").s().p("AhSJrQgpgHgogNQhqgjhahJIgYgUIghggQhLhMguhYQgUglgNgnIAAgBQgKgdgHgeIgEgTQgKg3AAg7IAAgCQABg2AJg0QAJguAGgSQAJgfAMgdQAdhEArg8QAdgpAjgnIAcgdQA2g2A+gjQAxgcA1gRQAogOArgGQAYgEAZgCIAogCQBhgCBWAdIALAEQAaAJAZAMIAMAHIAJAFQAtAYArAlQAhAcAgAiQAPAQAOASQA4BEAkBNQAuBjANBzIADAtIABAiQgBAlgFAkQgQByg5BhQglBBg4A6IgWAWQhJBGhTAoQhpAyh5ADIgSABQgvgBgrgHg");
	this.shape_77.setTransform(68.9,70.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.2,206,123.7,129);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;