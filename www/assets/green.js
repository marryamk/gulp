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
(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#669933").ss(3).p("AJbAAQAADziaCxQgLANgMAMQhRBUhfAuQhzA3iHAAQiHAAhyg3QhgguhQhUQixi4AAkFQAAkDCxi5QCwi4D5AAQD5AACxC4QAMANALANQCaCwAADyg");
	this.shape.setTransform(68,70.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7AC943").s().p("Aj5I/QhgguhQhUQixi5AAkEQAAkECxi4QCwi5D5ABQD5gBCxC5IAXAZQCaCxAADyQAADziaCxIgXAZQhRBUhgAuQhyA2iHABQiHgBhyg2g");
	this.shape_1.setTransform(68,70.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#669933").ss(3).p("ApWgIQAAgdADgbQADggAHgeQAHgjANghQAiheA+hTQAbgkAggjQAagbAbgXQA3gwA8geQBTgpBggKQAmgDAmABQA/ACA6ANQBDAQA9AhQBWAvBLBOQATAUAKANQAeAiAZAmQAaAnASAqQAYA3ALA7QAOBKgBBNQAAAdgCAcQgHBMgVBGQgMApgTAmQgkBJg7A+QgLAMgMALQhJBHhUApQgLAGgLAFQguAUgyAKQhJAQhPgBQiLgFhvg0QgCgBgDgBQghgPgegUQgZgRgWgTQgUgRgSgTQgKgKgKgMQgJgKgIgKQg4hGgjhQQgrhfgNhvQgEgjAAgig");
	this.shape_2.setTransform(67.3,69.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7AC943").s().p("AgHJxQiLgFhvg0IgFgCQghgPgegUQgZgRgWgTQgUgRgSgTIgUgWIgRgUQg4hGgkhQQgqhfgNhvQgEgjAAgiQAAgdADgbQADggAHgeQAHgjAMghQAjheA+hTQAbgkAggjQAagbAbgXQA2gwA9geQBTgpBggKQAmgDAmABQA/ACA6ANQBDAQA8AhQBXAvBKBOQAUAUAKANQAeAiAZAmQAaAnASAqQAYA3ALA7QAOBKgBBNQAAAdgCAcQgHBMgVBGQgMApgTAmQglBJg6A+IgXAXQhJBHhUApIgWALQguAUgyAKQhDAPhJAAIgMAAg");
	this.shape_3.setTransform(67.3,69.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#669933").ss(3).p("ApTgSQAAgdADgbQAEggAJgdQAIghAPgfQAnhZA/hSQAbgjAhgiQAZgcAbgYQA1gyA8gdQBUgpBggGQAmgDAlACQA/ADA4AQQBCARA7AkQBSAyBKBPQASAUALANQAeAjAZAlQAaAoASAqQAXA2AJA8QALBJgCBNQgBAdgCAcQgHBLgUBIQgMApgTAlQglBJg9A7QgLALgMALQhLBEhVAkQgLAFgLAFQguASgxAIQhJANhOgEQiJgHhxgyQgCgBgDgBQgigQgegUQgYgQgWgUQgUgRgRgUQgJgKgJgMQgIgKgIgKQgyhIgihQQgohfgOhvQgFgkgBghg");
	this.shape_4.setTransform(66.7,69.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7AC943").s().p("AgPJrQiJgHhxgyIgFgCQgigQgegUQgYgQgWgUQgUgRgRgUQgJgKgJgMIgQgUQgyhIgihQQgohfgOhvQgFgkgBghQAAgdADgbQAEggAJgdQAIghAPgfQAnhZA/hSQAbgjAhgiQAZgcAbgYQA1gyA8gdQBUgpBggGQAmgDAlACQA/ADA4AQQBCARA7AkQBSAyBKBPIAdAhQAeAjAZAlQAaAoASAqQAXA2AJA8QALBJgCBNQgBAdgCAcQgHBLgUBIQgMApgTAlQglBJg9A7IgXAWQhLBEhVAkIgWAKQguASgxAIQg5AKg9AAIghgBg");
	this.shape_5.setTransform(66.7,69.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#669933").ss(3).p("ApPgcQgBgdAEgbQAFgfAKgcQAJggARgdQAshVBAhPQAcgiAggjQAZgcAagZQA1gzA8gdQBTgoBhgEQAkgCAnADQA9AFA4ASQBBASA4AnQBPA1BIBQQASAUALANQAdAjAaAlQAaAoASAqQAWA2AHA8QAIBKgDBMQgBAdgDAcQgHBLgTBIQgLAqgUAlQglBHg/A5QgMALgMAKQhNBAhWAhQgLAEgLAEQguAQgxAGQhIAJhNgFQiIgJhygyQgDgBgCgBQgjgQgegTQgYgQgWgUQgTgSgQgUQgJgKgHgNQgIgKgGgLQguhJgfhPQgmhggQhvQgGglAAggg");
	this.shape_6.setTransform(66,68.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7AC943").s().p("AgXJmQiIgJhygyIgFgCQgjgQgegTQgYgQgWgUQgTgSgQgUQgJgKgHgNIgOgVQguhJgfhPQgmhggQhvQgGglAAggQgBgdAEgbQAFgfAKgcQAJggARgdQAshVBAhPQAcgiAggjQAZgcAagZQA1gzA8gdQBTgoBhgEQAkgCAnADQA9AFA4ASQBBASA4AnQBPA1BIBQQASAUALANQAdAjAaAlQAaAoASAqQAWA2AHA8QAIBKgDBMIgEA5QgHBLgTBIQgLAqgUAlQglBHg/A5IgYAVQhNBAhWAhIgWAIQguAQgxAGQguAGgxAAQgcAAgagCg");
	this.shape_7.setTransform(66,68.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#669933").ss(3).p("ApMgmQgBgdAFgbQAGggAMgaQAJgeAUgcQAxhPBAhNQAdgiAggkQAZgbAZgaQA0g1A8gcQBSgoBigBQAkgBAmAEQA+AHA3ATQA/AUA1ApQBMA5BGBQQASAUALAOQAdAiAaAmQAbAnARAqQAWA2AEA9QAGBKgEBMQgCAdgDAbQgIBLgSBJQgLArgTAkQgmBGhCA3QgLAJgNAKQhOA9hXAdQgLAEgLADQguAOgwAEQhJAFhMgGQiGgMh0gyQgDgBgCAAQgkgQgdgSQgZgQgVgVQgSgTgPgUQgIgLgHgMQgHgKgGgLQgohLgdhPQgjhggShwQgHgjgBghg");
	this.shape_8.setTransform(65.3,68.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7AC943").s().p("AgfJhQiGgMh0gyIgFgBQgkgQgdgSQgZgQgVgVQgSgTgPgUQgIgLgHgMIgNgVQgohLgdhPQgjhggShwQgHgjgBghIAAAAQgBgdAFgbQAGggAMgaQAJgeAUgcQAxhPBAhNQAdgiAggkIAyg1QA0g1A8gcQBSgoBigBQAkgBAmAEQA+AHA3ATQA/AUA1ApQBMA5BGBQIAdAiQAdAiAaAmQAbAnARAqQAWA2AEA9QAGBKgEBMIgFA4QgIBLgSBJQgLArgTAkQgmBGhCA3IgYATQhOA9hXAdIgWAHQguAOgwAEQgiACgiAAQgpAAgogDg");
	this.shape_9.setTransform(65.3,68.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#669933").ss(3).p("ApJgwQgBgeAGgaQAGggAOgZQAKgcAWgbQA2hKBAhLQAdghAggkQAZgbAZgbQA0g3A6gcQBTgnBiABQAkABAmAFQA9AIA2AVQA9AWAzAsQBIA8BGBQQASAVAKAOQAdAiAaAmQAcAnAQAqQAVA1ACA/QADBIgFBMQgCAdgDAcQgJBKgRBKQgKArgTAjQgnBGhEA0QgMAJgNAJQhPA5hYAaQgLADgLADQguAMgwACQhJABhLgIQiDgPh3gwQgCgBgDgBQglgPgcgSQgZgQgVgVQgSgTgNgVQgIgLgGgMQgGgLgFgLQgjhMgbhQQghhfgUhwQgHgkgBggg");
	this.shape_10.setTransform(64.7,67.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7AC943").s().p("AgoJbQiDgPh3gwIgFgCQglgPgcgSQgZgQgVgVQgSgTgNgVQgIgLgGgMIgLgWQgjhMgbhQQghhfgUhwQgHgkgBggQgBgeAGgaQAGggAOgZQAKgcAWgbQA2hKBAhLIA9hFIAyg2QA0g3A6gcQBTgnBiABQAkABAmAFQA9AIA2AVQA9AWAzAsQBIA8BGBQIAcAjQAdAiAaAmQAcAnAQAqQAVA1ACA/QADBIgFBMIgFA5QgJBKgRBKQgKArgTAjQgnBGhEA0IgZASQhPA5hYAaIgWAGQguAMgwACIgWAAQg+AAhAgHg");
	this.shape_11.setTransform(64.7,67.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#669933").ss(3).p("ApHg8QgBgdAGgbQAIgfAPgYQALgaAYgZQA7hFBBhKQAeggAggkQAYgcAZgbQAyg5A7gbQBSgnBhAEQAmACAlAGQA9AJA1AXQA8AYAwAvQBFA+BEBRQARAWALANQAcAjAbAlQAcAoAQAqQAUA1AAA/QAABIgGBMQgDAdgDAbQgJBKgQBLQgJArgUAjQgnBGhHAwQgMAJgNAJQhQA1hZAVQgMADgLADQguAKgwgBQhIgChKgKQiCgRh4gvQgDgBgCgBQgmgPgcgSQgZgQgUgVQgSgUgMgVQgHgLgFgNQgFgKgFgMQgehNgZhQQgehggVhwQgIgkgCgfg");
	this.shape_12.setTransform(64.2,67.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7AC943").s().p("ABhJgQhIgChKgKQiCgRh4gvIgFgCQgmgPgcgSQgZgQgUgVQgSgUgMgVQgHgLgFgNIgKgWQgehNgZhQQgehggVhwQgIgkgCgfIAAgBQgBgdAGgbQAIgfAPgYQALgaAYgZQA7hFBBhKIA+hEIAxg3QAyg5A7gbQBSgnBhAEQAmACAlAGQA9AJA1AXQA8AYAwAvQBFA+BEBRIAcAjQAcAjAbAlQAcAoAQAqQAUA1AAA/QAABIgGBMIgGA4QgJBKgQBLQgJArgUAjQgnBGhHAwIgZASQhQA1hZAVIgXAGQgsAJgtAAIgFAAg");
	this.shape_13.setTransform(64.2,67.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#669933").ss(3).p("ApFhHQgBgeAHgaQAIgfARgXQALgZAbgXQBAhABChIQAegfAfglQAZgbAYgcQAyg7A6gbQBSgmBhAHQAmACAlAHQA8AMA0AYQA7AZAuAyQBBBCBCBSQASAVAKAOQAcAiAbAmQAcAnAQAqQAUA1gDBAQgCBIgIBMQgDAcgDAcQgJBJgPBMQgJAsgUAiQgoBFhJAuQgMAIgOAIQhRAyhaARQgMADgLACQguAIgwgDQhHgGhKgLQh/gUh7gvQgCAAgDgBQgmgPgcgRQgZgQgUgWQgRgUgLgWQgGgLgFgNQgEgLgEgMQgZhPgXhPQgbhggYhuQgIgngCgfg");
	this.shape_14.setTransform(63.7,67);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7AC943").s().p("ABWJfQhHgGhKgLQh/gUh7gvIgFgBQgmgPgcgRQgZgQgUgWQgRgUgLgWQgGgLgFgNIgIgXQgZhPgXhPQgbhggYhuQgIgngCgfQgBgeAHgaQAIgfARgXQALgZAbgXQBAhABChIQAegfAfglIAxg3QAyg7A6gbQBSgmBhAHQAmACAlAHQA8AMA0AYQA7AZAuAyQBBBCBCBSIAcAjQAcAiAbAmQAcAnAQAqQAUA1gDBAQgCBIgIBMIgGA4QgJBJgPBMQgJAsgUAiQgoBFhJAuIgaAQQhRAyhaARIgXAFQgiAFgiAAIgaAAg");
	this.shape_15.setTransform(63.7,67);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#669933").ss(3).p("ApDhTQgCgeAIgaQAJgeASgWQAMgXAdgWQBFg7BChGQAfgfAfgkQAZgcAXgdQAxg8A6gbQBSglBiAJQAlADAlAJQA7ANA0AaQA5AbAsA0QA9BGBBBRQARAWALAOQAbAjAcAlQAdAoAPAqQATA0gGBAQgEBJgJBLQgDAdgEAbQgKBIgOBNQgIAtgUAiQgoBDhLAsQgNAIgOAHQhTAuhbAOQgMACgLABQguAGgvgFQhIgJhIgOQh+gVh8guQgDgBgCgBQgogPgagQQgagQgTgXQgRgUgKgXQgGgKgDgOQgEgLgDgMQgThQgVhQQgZhfgZhvQgKgogBgdg");
	this.shape_16.setTransform(63.2,66.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7AC943").s().p("ABLJdQhIgJhIgOQh+gVh8guIgFgCQgogPgagQQgagQgTgXQgRgUgKgXQgGgKgDgOIgHgXQgThQgVhQQgZhfgZhvQgKgogBgdIAAgBQgCgeAIgaQAJgeASgWQAMgXAdgWQBFg7BChGQAfgfAfgkIAwg5QAxg8A6gbQBSglBiAJQAlADAlAJQA7ANA0AaQA5AbAsA0QA9BGBBBRIAcAkQAbAjAcAlQAdAoAPAqQATA0gGBAQgEBJgJBLIgHA4QgKBIgOBNQgIAtgUAiQgoBDhLAsIgbAPQhTAuhbAOIgXADQgYADgZAAQgWAAgWgCg");
	this.shape_17.setTransform(63.2,66.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#669933").ss(3).p("ApChfQgCgeAIgaQAKgeAUgVQANgWAggTQBJg3BDhDQAfgfAgglQAYgcAXgdQAwg+A5gaQBSglBiAMQAmAEAlAJQA6APAzAcQA3AcAqA4QA5BIBABTQARAWALAOQAbAiAcAmQAdAnAOAqQATA1gIBAQgHBJgKBKQgEAdgEAbQgKBIgNBOQgHAtgVAiQgpBChNApQgNAIgOAGQhVArhcAKQgLABgLABQgvAEgvgIQhFgMhKgPQh7gYh+guQgDgBgDAAQgogPgagQQgagQgTgXQgQgVgJgXQgFgKgCgPQgDgKgCgNQgPhRgThQQgWhggbhvQgKgogCgdg");
	this.shape_18.setTransform(62.8,66.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7AC943").s().p("AA/JaQhFgMhKgPQh7gYh+guIgGgBQgogPgagQQgagQgTgXQgQgVgJgXQgFgKgCgPIgFgXQgPhRgThQIgxjPQgKgogCgdIAAAAQgCgeAIgaQAKgeAUgVQANgWAggTQBJg3BDhDQAfgfAgglQAYgcAXgdQAwg+A5gaQBSglBiAMQAmAEAlAJQA6APAzAcQA3AcAqA4IB5CbIAcAkIA3BIQAdAnAOAqQATA1gIBAQgHBJgKBKIgIA4QgKBIgNBOQgHAtgVAiQgpBChNApIgbAOQhVArhcAKIgWACIgeABQgfAAghgFg");
	this.shape_19.setTransform(62.8,66.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#669933").ss(3).p("ApBhsQgCgeAJgaQALgeAVgTQAOgUAigSQBPgyBDhCQAggdAfgmQAXgbAYgfQAvg/A5gaQBRgkBjAOQAmAFAkALQA6AQAyAeQA2AeAnA6QA2BMA+BSQARAXAKAOQAbAiAcAmQAeAnAOAqQASA0gKBAQgLBLgKBKQgEAcgEAcQgLBHgMBOQgHAugVAhQgpBChQAmQgNAHgOAGQhWAnhdAGQgMABgLAAQgvACgugKQhFgPhJgRQh5gbiBgtQgCAAgDgBQgpgOgagQQgagQgSgYQgQgVgHgYQgFgKgCgOQgCgMgBgMQgJhTgRhQQgUhfgdhwQgLgpgCgbg");
	this.shape_20.setTransform(62.3,66.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7AC943").s().p("AA0JXIiOggQh5gbiBgtIgFgBQgpgOgagQQgagQgSgYQgQgVgHgYQgFgKgCgOQgCgMgBgMQgJhTgRhQQgUhfgdhwQgLgpgCgbIAAgBQgCgeAJgaQALgeAVgTQAOgUAigSQBPgyBDhCQAggdAfgmQAXgbAYgfQAvg/A5gaQBRgkBjAOQAmAFAkALQA6AQAyAeQA2AeAnA6QA2BMA+BSIAbAlIA3BIQAeAnAOAqQASA0gKBAIgVCVIgIA4IgXCVQgHAugVAhQgpBChQAmIgbANQhWAnhdAGIgXABIgQABQgnAAgmgJg");
	this.shape_21.setTransform(62.3,66.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#669933").ss(3).p("ApAh5QgDgeAKgaQAMgeAXgSQAOgSAlgQQBTgtBFhAQAggdAfgmQAXgbAXgfQAuhCA5gZQBRgkBjARQAmAHAkALQA5ASAxAfQA1AgAkA9QAzBPA8BTQARAXALAOQAaAiAdAmQAdAnAOAqQASA0gNBAQgNBMgLBJQgFAcgFAcQgKBGgLBQQgHAugVAhQgqBBhSAjQgNAGgPAGQhXAjheACQgMABgLAAQgvAAgugNQhEgThJgSQh3gdiCgtQgDAAgDgBQgpgOgagPQgagQgSgYQgPgWgHgYQgDgLgBgOQgCgMAAgMQgEhVgPhPQgShggehwQgMgpgCgbg");
	this.shape_22.setTransform(61.9,65.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7AC943").s().p("AAoJUIiNglQh3gdiCgtIgGgBQgpgOgagPQgagQgSgYQgPgWgHgYQgDgLgBgOQgCgMAAgMQgEhVgPhPQgShggehwQgMgpgCgbIAAgBQgDgeAKgaQAMgeAXgSQAOgSAlgQQBTgtBFhAQAggdAfgmQAXgbAXgfQAuhCA5gZQBRgkBjARQAmAHAkALQA5ASAxAfQA1AgAkA9QAzBPA8BTIAcAlIA3BIQAdAnAOAqQASA0gNBAQgNBMgLBJIgKA4IgVCWQgHAugVAhQgqBBhSAjIgcAMQhXAjheACIgXABQgvAAgugNg");
	this.shape_23.setTransform(61.9,65.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#669933").ss(3).p("Ao/iGQgDgeALgaQANgdAYgRQAPgRAngOQBZgoBEg+QAhgcAfgmQAXgcAWggQAuhDA4gZQBRgjBkAUQAlAHAkAMQA5AUAwAhQAzAhAiBAQAvBSA7BUQARAXAKAOQAaAjAdAlQAfAoANAqQARAzgQBBQgPBLgMBJQgGAdgEAbQgMBGgKBQQgGAvgVAgQgqBAhVAhQgNAGgPAFQhZAfhfgBQgMAAgLgBQgvgCgtgPQhFgWhHgVQh2gfiEgrQgDgBgCgBQgrgOgYgOQgbgQgRgZQgPgWgFgZQgEgKAAgPQgBgMABgNQABhVgMhQQgQhggghwQgNgqgCgag");
	this.shape_24.setTransform(61.5,65.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7AC943").s().p("ACQJjIgXgBQgvgCgtgPQhFgWhHgVQh2gfiEgrIgFgCQgrgOgYgOQgbgQgRgZQgPgWgFgZQgEgKAAgPQgBgMABgNQABhVgMhQQgQhggghwQgNgqgCgaIAAgBQgDgeALgaQANgdAYgRQAPgRAngOQBZgoBEg+QAhgcAfgmQAXgcAWggQAuhDA4gZQBRgjBkAUQAlAHAkAMQA5AUAwAhQAzAhAiBAQAvBSA7BUIAbAlIA3BIQAfAoANAqQARAzgQBBQgPBLgMBJIgKA4QgMBGgKBQQgGAvgVAgQgqBAhVAhIgcALQhVAehbAAIgIAAg");
	this.shape_25.setTransform(61.5,65.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#669933").ss(3).p("Ao+iTQgDgfAMgaQANgdAagQQAQgPApgMQBdgjBGg8QAhgcAegmQAXgcAWghQAthEA4gZQBQgjBlAXQAlAIAkANQA4AWAvAjQAyAiAgBDQArBWA6BUQAQAXAKAOQAaAjAeAlQAeAoANAqQAQAzgSBBQgSBMgNBIQgGAdgEAbQgMBFgJBSQgGAvgVAgQgrA/hXAeQgOAFgPAFQhaAbhggFQgMAAgLgBQgvgFgtgRQhEgahHgWQhzghiHgrQgCgBgDgBQgrgNgYgOQgbgQgRgZQgPgXgEgZQgCgLABgPQgBgMACgNQAGhXgKhQQgNhfgihxQgOgqgCgag");
	this.shape_26.setTransform(61.1,65.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7AC943").s().p("ACEJkIgXgBQgvgFgtgRQhEgahHgWQhzghiHgrIgFgCQgrgNgYgOQgbgQgRgZQgPgXgEgZQgCgLABgPQgBgMACgNQAGhXgKhQQgNhfgihxQgOgqgCgaIAAAAQgDgfAMgaQANgdAagQQAQgPApgMQBdgjBGg8QAhgcAegmQAXgcAWghQAthEA4gZQBQgjBlAXQAlAIAkANQA4AWAvAjQAyAiAgBDQArBWA6BUIAaAlIA4BIQAeAoANAqQAQAzgSBBQgSBMgNBIIgKA4QgMBFgJBSQgGAvgVAgQgrA/hXAeIgdAKQhNAXhQAAIgdgBg");
	this.shape_27.setTransform(61.1,65.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#669933").ss(3).p("Ao9ihQgEgfANgaQAOgcAbgPQARgNAsgLQBigeBGg6QAigbAegnQAXgcAVghQAshHA4gYQBQgiBlAZQAmAJAiAPQA4AWAvAlQAwAlAdBFQAoBZA4BUQAQAYALAOQAZAjAeAlQAfAoAMAqQAQAygUBDQgVBMgOBHQgHAdgFAbQgMBFgIBSQgFAwgVAfQgsA/hZAbQgOAFgQAEQhbAYhhgKQgMgBgLgBQgvgGgtgUQhEgdhGgYQhxgkiIgqQgDgBgDAAQgsgOgYgOQgbgPgQgaQgOgXgDgaQgCgKACgQQAAgMACgNQAMhZgIhPQgLhggjhxQgPgrgCgYg");
	this.shape_28.setTransform(60.7,65.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7AC943").s().p("AB4JlIgXgCQgvgGgtgUQhEgdhGgYIj5hOIgGgBQgsgOgYgOQgbgPgQgaQgOgXgDgaQgCgKACgQIACgZQAMhZgIhPQgLhggjhxQgPgrgCgYIAAgBQgEgfANgaQAOgcAbgPQARgNAsgLQBigeBGg6QAigbAegnQAXgcAVghQAshHA4gYQBQgiBlAZQAmAJAiAPQA4AWAvAlQAwAlAdBFQAoBZA4BUIAbAmIA3BIQAfAoAMAqQAQAygUBDQgVBMgOBHIgMA4QgMBFgIBSQgFAwgVAfQgsA/hZAbIgeAJQhBARhFAAQgbAAgbgDg");
	this.shape_29.setTransform(60.7,65.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#669933").ss(3).p("Ao8ivQgEgfANgaQAPgcAdgOQASgMAtgJQBogZBGg4QAigaAfgnQAWgdAVgiQAshIA2gXQBPgiBnAcQAmAKAiAPQA3AZAuAnQAuAlAbBJQAkBcA4BVQAQAYAKAOQAZAjAeAlQAgAoAMAqQAOAxgWBEQgYBMgPBHQgHAcgFAbQgNBFgHBTQgEAwgWAfQgsA+hbAYQgPAFgQADQhcAUhigNQgMgBgMgCQgugJgrgVQhGghhEgaQhwgmiKgpQgDgBgDgBQgtgNgXgNQgbgQgQgaQgOgYgBgaQgBgKACgRQABgLADgOQARhagGhQQgIhfgmhxQgPgsgCgYg");
	this.shape_30.setTransform(60.3,65.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7AC943").s().p("ABsJmIgYgDQgugJgrgVQhGghhEgaQhwgmiKgpIgGgCQgtgNgXgNQgbgQgQgaQgOgYgBgaQgBgKACgRQABgLADgOQARhagGhQQgIhfgmhxQgPgsgCgYIAAAAQgEgfANgaQAPgcAdgOQASgMAtgJQBogZBGg4QAigaAfgnQAWgdAVgiQAshIA2gXQBPgiBnAcQAmAKAiAPQA3AZAuAnQAuAlAbBJQAkBcA4BVIAaAmQAZAjAeAlQAgAoAMAqQAOAxgWBEQgYBMgPBHIgMA3QgNBFgHBTQgEAwgWAfQgsA+hbAYQgPAFgQADQg5AMg6AAQglAAgmgFg");
	this.shape_31.setTransform(60.3,65.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#669933").ss(3).p("Ao8i/QgDgfANgZQAQgdAfgMQASgKAwgIQBtgTBHg3QAigZAfgoQAWgcAUgjQArhKA2gWQBOgiBoAfQAmALAiAQQA3AaAsApQAtAnAZBLQAgBfA2BWQAQAYAKAPQAZAiAeAmQAgAnAMAqQAOAxgZBFQgaBMgRBGQgHAdgFAbQgNBEgGBUQgEAxgWAeQgtA9heAWQgOADgQADQheARhjgRQgMgCgMgCQgvgLgqgXQhFglhEgbQhugpiMgpQgDAAgDgBQgtgNgXgNQgbgPgQgbQgNgYAAgbQgBgLADgQQACgMAEgOQAWhbgEhQQgGhegnhzQgQgsgDgXg");
	this.shape_32.setTransform(59.9,65.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7AC943").s().p("ABgJmIgYgEQgvgLgqgXQhFglhEgbQhugpiMgpIgGgBQgtgNgXgNQgbgPgQgbQgNgYAAgbQgBgLADgQIAGgaQAWhbgEhQQgGhegnhzQgQgsgDgXIAAgBQgDgfANgZQAQgdAfgMQASgKAwgIQBtgTBHg3QAigZAfgoQAWgcAUgjQArhKA2gWQBOgiBoAfQAmALAiAQQA3AaAsApQAtAnAZBLQAgBfA2BWIAaAnQAZAiAeAmQAgAnAMAqQAOAxgZBFQgaBMgRBGIgMA4QgNBEgGBUQgEAxgWAeQgtA9heAWIgeAGQgvAJgxAAQgwAAgxgJg");
	this.shape_33.setTransform(59.9,65.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#669933").ss(3).p("Ao7jOQgEgfAOgaQARgcAggLQATgIAzgGQBxgPBIg0QAjgZAegoQAWgcAUgkQAqhLA2gXQBNghBpAhQAlAMAiASQA2AcAsAqQAsApAWBOQAdBiA0BWQAQAZAKAOQAYAjAfAlQAgAoALAqQAOAwgcBGQgcBNgSBFQgHAdgGAaQgNBEgFBVQgEAxgWAeQgtA8hgATQgPADgRADQhfANhkgVQgMgCgLgDQgvgNgqgaQhFgohEgdQhrgriOgoQgDgBgDAAQgugNgWgMQgcgQgPgbQgNgZABgbQAAgLAEgQQADgMAEgPQAbhcgChQQgDhegphzQgQgtgDgWg");
	this.shape_34.setTransform(59.5,65.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7AC943").s().p("ABTJmIgXgFQgvgNgqgaQhFgohEgdQhrgriOgoIgGgBQgugNgWgMQgcgQgPgbQgNgZABgbQAAgLAEgQIAHgbQAbhcgChQQgDhegphzQgQgtgDgWIAAgBQgEgfAOgaQARgcAggLQATgIAzgGQBxgPBIg0QAjgZAegoQAWgcAUgkQAqhLA2gXQBNghBpAhQAlAMAiASQA2AcAsAqQAsApAWBOQAdBiA0BWIAaAnQAYAjAfAlQAgAoALAqQAOAwgcBGQgcBNgSBFIgNA3QgNBEgFBVQgEAxgWAeQgtA8hgATIggAGQglAFglAAQg8AAg9gNg");
	this.shape_35.setTransform(59.5,65.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#669933").ss(3).p("Ao7jdQgEggAPgZQASgcAigKQATgGA1gFQB3gKBIgyQAjgYAfgoQAVgdAUgkQAphNA1gWQBOghBpAkQAmANAhATQA2AdAqAsQAqArAUBQQAZBmA0BWQAPAZAKAPQAYAjAfAlQAhAoALAqQAMAwgdBGQggBNgSBFQgIAcgGAbQgOBDgEBWQgDAygWAdQguA7hjARQgPACgQACQhhAKhlgZQgMgDgMgEQgvgOgpgcQhFgshCgfQhqgtiQgnQgDgBgDAAQgvgNgWgMQgbgPgPgcQgNgZADgcQAAgLAFgRQAEgMAFgOQAghfAAhPQAAhegrh0QgRgugEgUg");
	this.shape_36.setTransform(59.1,65.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7AC943").s().p("ABHJmIgYgHQgvgOgpgcQhFgshCgfQhqgtiQgnIgGgBQgvgNgWgMQgbgPgPgcQgNgZADgcQAAgLAFgRIAJgaQAghfAAhPQAAhegrh0QgRgugEgUIAAgBQgEggAPgZQASgcAigKQATgGA1gFQB3gKBIgyQAjgYAfgoQAVgdAUgkQAphNA1gWQBOghBpAkQAmANAhATQA2AdAqAsQAqArAUBQQAZBmA0BWQAPAZAKAPQAYAjAfAlQAhAoALAqQAMAwgdBGQggBNgSBFIgOA3QgOBDgEBWQgDAygWAdQguA7hjARIgfAEQgcADgcAAQhGAAhIgSg");
	this.shape_37.setTransform(59.1,65.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#669933").ss(3).p("AI5AHQAMAyggBHQgxBtgTBbQgPBCgDBXQgCAzgWAcQg3BEh9AIQhiAGhmgdQg7gQg1gmQhLg0hHgiQhdgriXgmQgwgNgVgLQgcgPgOgcQgMgaADgcQADgSAPgmQAlhfAChQQAChegsh0QgTgvgDgUQgEggAQgZQASgbAjgJQAVgFA3gDQB7gFBJgwQA9gpAuhZQAohPA1gVQBOggBpAmQBiAkBEBLQAoAsASBTQAVBpAyBXQAeA1AzA7QAhAoAKAog");
	this.shape_38.setTransform(58.7,65.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7AC943").s().p("AA7JlQg7gQg1gmQhLg0hHgiQhdgriXgmQgwgNgVgLQgcgPgOgcQgMgaADgcQADgSAPgmQAlhfAChQQAChegsh0QgTgvgDgUQgEggAQgZQASgbAjgJQAVgFA3gDQB7gFBJgwQA9gpAuhZQAohPA1gVQBOggBpAmQBiAkBEBLQAoAsASBTQAVBpAyBXQAeA1AzA7QAhAoAKAoQAMAyggBHQgxBtgTBbQgPBCgDBXQgCAzgWAcQg3BEh9AIIgiABQhSAAhUgYg");
	this.shape_39.setTransform(58.7,65.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#669933").ss(3).p("Ao6jfQgFgfAQgZQARgcAigKQAUgGA1gEQB3gKBIgyQAjgYAegoQAXgdATgkQAphOA2gWQBNggBpAkQAkANAhARQA3AeArAuQAqAqAUBRQAZBmAzBXQAjA5AuA2QAgAoALAqQAMAwgeBHQgfBLgSBDQgJAegGAcQgOBDgEBWQgCAygXAdQg1BFh7ALQhhAJhlgZQg8gOg0gkQhFgshBgeQhsgviVgnQgvgNgWgMQgbgPgPgcQgNgZADgcQABgLAFgTQAEgLAFgNQAghfAAhPQAAhegrh0QgSgvgCgVg");
	this.shape_40.setTransform(59.5,65.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7AC943").s().p("ABGJmQg8gOg0gkQhFgshBgeQhsgviVgnQgvgNgWgMQgbgPgPgcQgNgZADgcQABgLAFgTIAJgYQAghfAAhPQAAhegrh0QgSgvgCgVQgFgfAQgZQARgcAigKQAUgGA1gEQB3gKBIgyQAjgYAegoQAXgdATgkQAphOA2gWQBNggBpAkQAkANAhARQA3AeArAuQAqAqAUBRQAZBmAzBXQAjA5AuA2QAgAoALAqQAMAwgeBHQgfBLgSBDQgJAegGAcQgOBDgEBWQgCAygXAdQg1BFh7ALQgbACgbAAQhHAAhJgSg");
	this.shape_41.setTransform(59.5,65.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#669933").ss(3).p("Ao7jQQgEggAPgZQAQgcAggLQAUgIAzgFQBygOBIg0QAigZAfgnQAYggASghQAqhMA2gWQBNghBpAiQAkALAgARQA7AfApApQAsApAVBPQAdBjA0BWQAGAJAGAIQAJAOAKAOQAXAhAbAhQAgAnALAqQAOAxgcBGQgdBLgRBEQgJAhgFAZQgOBEgFBVQgDAxgWAeQguA9hiASQgOACgPACQhiANhigVQgMgDgMgDQgvgNgpgaQhFgphCgdQhsgsiMgmQgFgCgEgBQgvgNgWgMQgbgPgPgcQgOgZACgbQAAgJADgNQABgEABgEQADgLAEgMQAchegChPQgChegphzQgRgsgDgXg");
	this.shape_42.setTransform(59.8,65.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7AC943").s().p("ABRJnIgYgGQgvgNgpgaQhFgphCgdQhsgsiMgmIgJgDQgvgNgWgMQgbgPgPgcQgOgZACgbQAAgJADgNIACgIIAHgXQAchegChPQgChegphzQgRgsgDgXIAAgBQgEggAPgZQAQgcAggLQAUgIAzgFQBygOBIg0QAigZAfgnQAYggASghQAqhMA2gWQBNghBpAiQAkALAgARQA7AfApApQAsApAVBPQAdBjA0BWIAMARIATAcQAXAhAbAhQAgAnALAqQAOAxgcBGQgdBLgRBEIgOA6QgOBEgFBVQgDAxgWAeQguA9hiASIgdAEQgkAFglAAQg9AAg+gNg");
	this.shape_43.setTransform(59.8,65.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#669933").ss(3).p("Ao7jDQgEgfAOgaQAPgcAfgMQATgJAxgHQBugSBHg2QAigaAegnQAZgfASghQArhKA2gXQBOghBoAfQAkALAhAQQA7AdAqAoQAtAnAXBMQAgBgA2BWQAFAIAGAJQAKAOAKAOQAYAhAaAgQAgAoAMAqQANAxgZBFQgaBLgRBEQgIAigFAZQgNBEgGBUQgEAxgWAeQgtA+hgAUQgOAEgPACQhgAQhigSQgMgCgMgDQgugLgqgYQhFgmhDgbQhtgpiLgoQgFgBgEgBQgugOgWgMQgcgQgPgaQgOgZABgbQAAgJACgNQAAgDABgEQACgLAEgNQAYhbgEhQQgFhegohzQgPgrgDgXg");
	this.shape_44.setTransform(60.1,65.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7AC943").s().p("ABcJmIgYgFQgugLgqgYQhFgmhDgbQhtgpiLgoIgJgCQgugOgWgMQgcgQgPgaQgOgZABgbQAAgJACgNIABgHQACgLAEgNQAYhbgEhQQgFhegohzQgPgrgDgXIAAgCQgEgfAOgaQAPgcAfgMQATgJAxgHQBugSBHg2QAigaAegnQAZgfASghQArhKA2gXQBOghBoAfQAkALAhAQQA7AdAqAoQAtAnAXBMQAgBgA2BWIALARIAUAcQAYAhAaAgQAgAoAMAqQANAxgZBFQgaBLgRBEIgNA7QgNBEgGBUQgEAxgWAeQgtA+hgAUIgdAGQgtAIguAAQgzAAg0gKg");
	this.shape_45.setTransform(60.1,65.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#669933").ss(3).p("Ao8i1QgEgfANgaQAPgcAegNQASgLAvgJQBpgWBHg4QAhgaAfgnQAYgfATggQArhJA3gXQBOgiBnAdQAkAKAhAPQA8AcArAmQAuAmAaBJQAjBdA3BVQAFAJAHAIQAJAOAKAOQAYAhAbAgQAfAoAMAqQAOAxgXBFQgYBLgPBFQgIAhgFAZQgNBFgGBUQgEAwgWAeQgtA/heAXQgOAEgOADQhfAShhgOQgMgBgMgDQgugJgrgWQhFgjhDgaQhvgniKgoQgEgBgEgBQgugOgXgNQgbgPgQgbQgOgYAAgaQgBgJACgNQAAgEABgDQACgLADgMQAShbgFhPQgHhggmhxQgPgrgDgYg");
	this.shape_46.setTransform(60.5,65.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7AC943").s().p("ABnJmIgYgEQgugJgrgWQhFgjhDgaQhvgniKgoIgIgCQgugOgXgNQgbgPgQgbQgOgYAAgaQgBgJACgNIABgHIAFgXQAShbgFhPQgHhggmhxQgPgrgDgYIAAgBQgEgfANgaQAPgcAegNQASgLAvgJQBpgWBHg4QAhgaAfgnQAYgfATggQArhJA3gXQBOgiBnAdQAkAKAhAPQA8AcArAmQAuAmAaBJQAjBdA3BVIAMARIATAcQAYAhAbAgQAfAoAMAqQAOAxgXBFQgYBLgPBFIgNA6QgNBFgGBUQgEAwgWAeQgtA/heAXIgcAHQg2AKg3AAQgpAAgqgGg");
	this.shape_47.setTransform(60.5,65.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#669933").ss(3).p("Ao8ipQgEgfANgZQAOgdAcgOQARgMAtgKQBlgbBGg6QAhgaAegmQAZgfATggQAthHA3gYQBQgiBkAaQAkAJAiAOQA8AbAsAkQAvAkAcBHQAmBaA4BUQAGAJAGAJQAKANAKAOQAYAhAbAhQAfAnAMAqQAPAygVBEQgVBKgPBGQgHAhgFAZQgMBGgIBTQgFAwgVAfQgtA+hbAaQgNAEgPAEQhdAWhhgLQgLgBgMgCQgvgHgsgUQhEgghEgYQhxgliIgpQgEgBgEgBQgtgOgXgOQgbgPgRgaQgOgYgCgaQgBgIABgNQABgEAAgDQABgLADgMQAOhZgIhPQgJhggkhxQgPgrgCgYg");
	this.shape_48.setTransform(60.8,65.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7AC943").s().p("AByJlIgXgDQgvgHgsgUQhEgfhEgZQhxgliIgpIgIgCQgtgOgXgOQgbgPgRgaQgOgYgCgZQgBgJABgNIABgHIAEgXQAOhZgIhPQgJhggkhxQgPgrgCgYIAAgCQgEgfANgZQAOgdAcgOQARgMAtgKQBlgbBGg6QAhgaAegmQAZgfATggQAthHA3gYQBQgiBkAaQAkAJAiAOQA8AbAsAkQAvAkAcBHQAmBaA4BVIAMARIAUAcQAYAgAbAhQAfAnAMAqQAPAygVBEQgVBKgPBGIgMA7QgMBFgIBTQgFAwgVAfQgtA/hbAZIgcAIQg/APhAAAQgfAAgggEg");
	this.shape_49.setTransform(60.8,65.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#669933").ss(3).p("Ao9ibQgEgfANgaQANgdAbgPQAQgOArgLQBggfBFg8QAhgbAfgmQAZgfATgfQAthFA4gZQBQgiBkAYQAkAIAhANQA+AZAsAiQAxAjAeBEQApBYA6BTQAGAJAGAIQAJAOALAOQAYAgAaAhQAfAoANAqQAQA0gTBBQgTBLgOBGQgHAhgEAZQgMBGgJBSQgFAwgWAfQgrBAhZAcQgOAFgOAEQhcAZhggHQgLgBgMgBQgvgGgsgSQhEgchFgXQhygiiHgqQgEgCgFgBQgrgOgYgOQgbgPgRgaQgPgXgDgZQgBgJAAgNQAAgDABgEQAAgKACgMQAKhYgKhPQgLhggjhxQgOgqgCgZg");
	this.shape_50.setTransform(61.1,65.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7AC943").s().p("AB9JlIgXgCQgvgGgsgSQhEgchFgXIj5hMIgJgDQgrgOgYgOQgbgPgRgaQgPgXgDgZQgBgJAAgNIABgHIACgWQAKhYgKhPQgLhggjhxQgOgqgCgZIAAgBQgEgfANgaQANgdAbgPQAQgOArgLQBggfBFg8QAhgbAfgmQAZgfATgfQAthFA4gZQBQgiBkAYQAkAIAhANQA+AZAsAiQAxAjAeBEQApBYA6BTIAMARIAUAcIAyBBQAfAoANAqQAQA0gTBBQgTBLgOBGIgLA6QgMBGgJBSQgFAwgWAfQgrBAhZAcIgcAJQhHAThKAAQgVAAgWgBg");
	this.shape_51.setTransform(61.1,65.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#669933").ss(3).p("Ao+iPQgDgfALgaQANgdAZgQQAQgPAogNQBcgkBFg9QAggbAfgmQAZgfAUgeQAuhFA4gYQBQgjBjAVQAkAIAiAMQA+AXAtAhQAyAhAgBCQAtBUA7BTQAGAJAGAIQAKANAKAOQAZAhAZAhQAfAnAOArQAQAzgRBCQgQBKgNBGQgHAigEAZQgLBGgKBSQgGAvgVAgQgrBAhXAfQgNAFgOAEQhbAdhfgEQgMAAgLgBQgvgEgtgQQhDgZhGgVQh0ggiGgrQgEgBgEgBQgrgOgYgPQgbgQgSgZQgPgXgDgYQgCgJgBgNQAAgDAAgEQAAgKACgLQAFhXgMhPQgNhggihwQgNgqgCgag");
	this.shape_52.setTransform(61.5,65.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7AC943").s().p("ACIJjIgXgBQgvgEgtgQQhDgZhGgVQh0ggiGgrIgIgCQgrgOgYgPQgbgQgSgZQgPgXgDgYQgCgJgBgNIAAgHIACgVQAFhXgMhPQgNhggihwQgNgqgCgaIAAgBQgDgfALgaQANgdAZgQQAQgPAogNQBcgkBFg9QAggbAfgmQAZgfAUgeQAuhFA4gYQBQgjBjAVQAkAIAiAMQA+AXAtAhQAyAhAgBCQAtBUA7BTIAMARIAUAbIAyBCQAfAnAOArQAQAzgRBCQgQBKgNBGIgLA7QgLBGgKBSQgGAvgVAgQgrBAhXAfIgbAJQhQAahTAAIgXgBg");
	this.shape_53.setTransform(61.5,65.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#669933").ss(3).p("Ao/iDQgDgeALgaQAMgeAYgRQAPgRAmgOQBXgoBFg/QAfgcAfgmQAageAUgeQAuhDA5gZQBQgjBjATQAkAGAiAMQA+AVAuAfQA0AgAiA/QAwBRA8BTQAGAIAGAJQAKANALAOQAYAgAaAhQAeAoAOAqQARA0gPBBQgOBKgLBHQgGAhgFAaQgLBHgKBQQgGAvgVAgQgrBBhVAhQgNAGgOAFQhZAgheAAQgMAAgLAAQgvgCgtgOQhEgWhGgUQh2geiEgrQgEgCgEgBQgrgOgYgPQgbgQgSgZQgQgWgEgYQgDgJgBgMQAAgEAAgDQgBgKABgLQAAhWgNhPQgQhggfhwQgNgpgCgag");
	this.shape_54.setTransform(61.8,65.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7AC943").s().p("AB8JiQgvgCgtgOQhEgWhGgUQh2geiEgrIgIgDQgrgOgYgPQgbgQgSgZQgQgWgEgYQgDgJgBgMIAAgHIAAgVQAAhWgNhPQgQhggfhwQgNgpgCgaIAAgCQgDgeALgaQAMgeAYgRQAPgRAmgOQBXgoBFg/QAfgcAfgmQAageAUgeQAuhDA5gZQBQgjBjATQAkAGAiAMQA+AVAuAfQA0AgAiA/QAwBRA8BTIAMARIAVAbIAyBBQAeAoAOAqQARA0gPBBQgOBKgLBHIgLA7QgLBHgKBQQgGAvgVAgQgrBBhVAhIgbALQhZAgheAAIgMAAIgLAAg");
	this.shape_55.setTransform(61.8,65.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#669933").ss(3).p("ApAh3QgCgeAKgbQALgdAXgTQAOgSAkgPQBTgtBDhAQAfgdAggmQAZgeAVgdQAvhBA5gaQBQgkBiARQAkAGAiAKQBAAUAuAdQA1AfAlA8QAzBOA9BTQAGAIAGAIQALANAKAOQAZAgAZAhQAeAoAPAqQARA1gMBAQgMBJgLBIQgFAigEAZQgLBIgLBQQgHAugVAgQgqBChSAkQgNAGgOAFQhYAkhdADQgMABgLAAQgvgBgtgLQhEgThHgSQh4gciDgsQgEgCgEgBQgpgOgagQQgagQgTgYQgPgWgGgYQgDgJgCgMQAAgDgBgDQAAgKAAgLQgFhUgPhPQgShggehwQgMgpgCgbg");
	this.shape_56.setTransform(62.2,65.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7AC943").s().p("AArJVIiLglQh4gciDgsIgIgDQgpgOgagQQgagQgTgYQgPgWgGgYQgDgJgCgMIgBgGIAAgVQgFhUgPhPQgShggehwQgMgpgCgbIAAgBQgCgeAKgbQALgdAXgTQAOgSAkgPQBTgtBDhAQAfgdAggmQAZgeAVgdQAvhBA5gaQBQgkBiARQAkAGAiAKQBAAUAuAdQA1AfAlA8QAzBOA9BTIAMAQIAVAbIAyBBQAeAoAPAqQARA1gMBAIgXCRIgJA7IgWCYQgHAugVAgQgqBChSAkIgbALQhYAkhdADIgXABQgvgBgtgLg");
	this.shape_57.setTransform(62.2,65.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#669933").ss(3).p("ApAhsQgDgeAJgaQALgeAVgUQAOgTAigRQBOgxBDhCQAfgeAfglQAageAVgdQAvhAA6gaQBQgkBiAOQAkAFAiAJQBAATAvAcQA3AdAmA6QA3BLA+BSQAGAHAHAJQAKANALANQAZAhAZAhQAeAoAOAqQASA0gKBAQgJBKgKBIQgFAigEAZQgKBIgMBPQgHAugVAhQgqBChQAmQgNAHgNAGQhXAnhcAGQgMACgLAAQgvACgugKQhEgQhIgQQh5gZiBguQgEgBgEgBQgpgPgagQQgagQgTgYQgQgVgHgYQgEgJgCgLQAAgDgBgEQgBgJgBgLQgJhTgRhPQgUhggdhwQgLgogBgbg");
	this.shape_58.setTransform(62.5,66.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7AC943").s().p("AA1JXIiMggQh5gZiBguIgIgCQgpgPgagQQgagQgTgYQgQgVgHgYQgEgJgCgLIgBgHIgCgUQgJhTgRhPQgUhggdhwQgLgogBgbIAAgCQgDgeAJgaQALgeAVgUQAOgTAigRQBOgxBDhCQAfgeAfglQAageAVgdQAvhAA6gaQBQgkBiAOQAkAFAiAJQBAATAvAcQA3AdAmA6QA3BLA+BSIANAQIAVAaIAyBCQAeAoAOAqQASA0gKBAIgTCSIgJA7IgWCXQgHAugVAhQgqBChQAmIgaANQhXAnhcAGIgXACIgMABQgpAAgogJg");
	this.shape_59.setTransform(62.5,66.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#669933").ss(3).p("ApChgQgCgeAJgbQAKgeATgVQANgUAggTQBKg2BChDQAegeAgglQAageAVgcQAxg/A5gaQBRglBhAMQAkAEAiAIQBBARAwAaQA4AcApA3QA5BIBABSQAGAHAHAIQAKAOALANQAZAgAZAiQAdAnAQArQASA0gIBBQgGBIgJBJQgFAhgEAaQgJBIgOBPQgHAtgVAiQgpBDhOAoQgMAHgOAHQhVAqhbAKQgMACgMABQguADgugIQhFgMhIgPQh7gXiAguQgEgBgEgCQgogOgagRQgbgQgTgYQgQgVgIgXQgEgIgDgMQgBgDgBgDQgCgKgBgKQgNhSgThOQgXhhgbhvQgKgogCgcg");
	this.shape_60.setTransform(62.9,66.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7AC943").s().p("ABAJZQhFgMhIgPQh7gXiAguIgIgDQgogOgagRQgbgQgTgYQgQgVgIgXQgEgIgDgMIgCgGIgDgUQgNhSgThOIgyjQQgKgogCgcIAAgBQgCgeAJgbQAKgeATgVQANgUAggTQBKg2BChDQAegeAgglQAageAVgcQAxg/A5gaQBRglBhAMQAkAEAiAIQBBARAwAaQA4AcApA3IB5CaIANAPIAVAbQAZAgAZAiQAdAnAQArQASA0gIBBQgGBIgJBJIgJA7QgJBIgOBPQgHAtgVAiQgpBDhOAoIgaAOQhVAqhbAKIgYADIgcABQggAAgggGg");
	this.shape_61.setTransform(62.9,66.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#669933").ss(3).p("ApDhVQgCgeAJgbQAJgeASgWQAMgWAdgUQBGg6BChGQAdgeAgglQAageAWgbQAxg9A6gbQBRglBhAKQAjADAjAHQBBAPAxAZQA5AaArA0QA9BGBBBQQAHAIAGAIQAKANALAOQAaAgAYAhQAdAoAQAqQAUA1gGBBQgFBHgIBKQgEAhgDAaQgKBJgOBNQgIAtgUAiQgpBEhMArQgMAHgNAHQhUAuhbAOQgLACgMABQguAFgugFQhHgJhHgOQh9gVh+guQgEgCgEgCQgogOgagRQgbgQgTgYQgRgUgJgXQgFgIgDgMQgBgDgBgDQgDgJgBgKQgThRgUhOQgZhhgZhvQgKgngCgdg");
	this.shape_62.setTransform(63.3,66.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#7AC943").s().p("ABLJcQhHgJhHgOQh9gVh+guIgIgEQgogOgagRQgbgQgTgYQgRgUgJgXQgFgIgDgMIgCgGIgEgTQgThRgUhOQgZhhgZhvQgKgngCgdIAAgBQgCgeAJgbQAJgeASgWQAMgWAdgUQBGg6BChGQAdgeAgglIAwg5QAxg9A6gbQBRglBhAKQAjADAjAHQBBAPAxAZQA5AaArA0QA9BGBBBQIANAQIAVAbQAaAgAYAhQAdAoAQAqQAUA1gGBBQgFBHgIBKIgHA7QgKBJgOBNQgIAtgUAiQgpBEhMArIgZAOQhUAuhbAOIgXADQgXACgXAAQgXAAgXgCg");
	this.shape_63.setTransform(63.3,66.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#669933").ss(3).p("ApEhKQgCgeAIgbQAIgfARgXQAMgXAbgVQBAg/BChHQAdgfAgglQAageAXgaQAxg8A6gbQBRgmBhAIQAjACAjAGQBCANAyAYQA6AZAtAxQBABDBDBQQAGAHAHAIQAKANALAOQAaAgAYAhQAdAoAQArQAUA0gDBAQgCBIgHBKQgEAhgDAaQgJBJgPBNQgJAtgUAiQgoBFhKAtQgMAIgNAIQhTAxhZARQgMACgMACQgtAHgvgEQhHgFhIgMQh+gTh9gvQgEgCgEgCQgngOgbgSQgagQgUgXQgSgUgKgWQgFgJgEgLQgBgDgBgDQgDgJgCgKQgXhPgWhPQgchggYhvQgIgmgCgeg");
	this.shape_64.setTransform(63.7,67);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7AC943").s().p("ABVJdQhHgFhIgMQh+gTh9gvIgIgEQgngOgbgSQgagQgUgXQgSgUgKgWQgFgJgEgLIgCgGQgDgJgCgKIgtieQgchggYhvQgIgmgCgeIAAgBQgCgeAIgbQAIgfARgXQAMgXAbgVQBAg/BChHQAdgfAgglIAxg4QAxg8A6gbQBRgmBhAIQAjACAjAGQBCANAyAYQA6AZAtAxQBABDBDBQIANAPIAVAbQAaAgAYAhQAdAoAQArQAUA0gDBAQgCBIgHBKIgHA7QgJBJgPBNQgJAtgUAiQgoBFhKAtIgZAQQhTAxhZARIgYAEQgdAFgfAAIgggCg");
	this.shape_65.setTransform(63.7,67);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#669933").ss(3).p("ApFhAQgCgeAHgbQAIgfAPgYQALgYAZgXQA8hDBBhJQAdggAggkQAageAXgaQAyg6A7gcQBRgmBgAFQAjACAjAFQBDAMAyAVQA8AYAvAvQBEA/BEBQQAGAHAGAIQALANALANQAaAgAYAiQAdAoAQAqQAVA1gBBAQAABHgGBLQgDAhgDAaQgJBKgQBMQgJAsgUAjQgnBFhIAwQgMAJgMAIQhSA0hZAUQgLADgMACQguAJgvgBQhHgDhJgKQiAgQh7gxQgEgBgEgCQgmgPgcgSQgagQgUgXQgSgTgLgWQgGgJgEgLQgCgCgBgDQgDgJgDgKQgchOgYhOQgehhgWhxQgIgkgBgeg");
	this.shape_66.setTransform(64.1,67.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#7AC943").s().p("ABfJfQhHgDhJgKQiAgQh7gxIgIgDQgmgPgcgSQgagQgUgXQgSgTgLgWQgGgJgEgLIgDgFIgGgTQgchOgYhOQgehhgWhxQgIgkgBgeIAAgBQgCgeAHgbQAIgfAPgYQALgYAZgXIB9iMIA9hEIAxg4QAyg6A7gcQBRgmBgAFQAjACAjAFQBDAMAyAVQA8AYAvAvQBEA/BEBQIAMAPIAWAaQAaAgAYAiQAdAoAQAqQAVA1gBBAQAABHgGBLIgGA7QgJBKgQBMQgJAsgUAjQgnBFhIAwIgYARQhSA0hZAUIgXAFQgnAIgpAAIgNAAg");
	this.shape_67.setTransform(64.1,67.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#669933").ss(3).p("ApHg2QgCgdAGgbQAHggAOgZQAKgaAXgYQA4hIBAhKQAdghAfgkQAbgdAXgaQAzg4A7gcQBSgnBhADQAhAAAkAFQBDAKAzAUQA9AWAyAsQBGA9BFBPQAHAHAGAIQALANALANQAaAgAYAhQAcAoARArQAWA1ABA/QACBHgFBMQgCAhgDAZQgJBLgQBMQgKArgUAjQgnBGhFAzQgMAJgMAIQhRA4hXAYQgMADgMADQgtALgwAAQhHABhJgJQiCgOh6gxQgEgCgEgCQglgPgcgSQgagQgVgXQgSgTgNgVQgGgJgFgKQgBgDgCgDQgEgJgDgJQghhNgZhOQghhggUhyQgHgjgBgfg");
	this.shape_68.setTransform(64.6,67.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7AC943").s().p("AgoJYQiCgOh6gxIgIgEQglgPgcgSQgagQgVgXQgSgTgNgVQgGgJgFgKIgDgGIgHgSQghhNgZhOQghhggUhyQgHgjgBgfIAAgBQgCgdAGgbQAHggAOgZQAKgaAXgYQA4hIBAhKIA8hFIAyg3QAzg4A7gcQBSgnBhADQAhAAAkAFQBDAKAzAUQA9AWAyAsQBGA9BFBPIANAPIAWAaQAaAgAYAhQAcAoARArQAWA1ABA/QACBHgFBMIgFA6QgJBLgQBMQgKArgUAjQgnBGhFAzIgYARQhRA4hXAYIgYAGQgtALgwAAIgHAAQhEAAhFgIg");
	this.shape_69.setTransform(64.6,67.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#669933").ss(3).p("ApKgsQgBgdAFgcQAGgfANgaQAJgcAVgaQAzhLBAhNQAcghAggkQAagdAYgZQA0g2A7gdQBSgnBgAAQAigBAjAEQBEAIA0ATQA+AUA0AqQBKA6BGBOQAHAHAGAIQAMANAKANQAbAgAYAhQAcAoARArQAWA2ADA+QAFBJgEBKQgCAhgDAaQgIBLgRBLQgLArgTAjQgnBHhDA1QgLAKgMAJQhQA6hWAcQgMAEgMADQgtAMgwADQhHAEhKgIQiEgLh5gyQgEgCgDgCQglgPgcgTQgagQgWgWQgSgTgNgUQgHgJgGgKQgBgDgCgDQgFgJgEgJQglhLgbhOQgjhhgShxQgHgigBggg");
	this.shape_70.setTransform(65.1,68.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7AC943").s().p("AggJdQiEgLh5gyIgHgEQglgPgcgTQgagQgWgWQgSgTgNgUIgNgTIgDgGIgJgSQglhLgbhOQgjhhgShxQgHgigBggIAAgBQgBgdAFgcQAGgfANgaQAJgcAVgaQAzhLBAhNIA8hFIAyg2QA0g2A7gdQBSgnBgAAQAigBAjAEQBEAIA0ATQA+AUA0AqQBKA6BGBOIANAPIAWAaQAbAgAYAhQAcAoARArQAWA2ADA+QAFBJgEBKIgFA7QgIBLgRBLQgLArgTAjQgnBHhDA1IgXATQhQA6hWAcIgYAHQgtAMgwADIgtABQgyAAgygFg");
	this.shape_71.setTransform(65.1,68.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#669933").ss(3).p("ApNgiQgBgeAFgbQAFggALgbQAJgdASgcQAvhQA/hOQAcgiAggjQAbgdAYgZQA0g1A8gdQBSgnBggDQAhgBAkADQBFAGA0ARQBAATA2AoQBNA2BIBOQAGAHAHAHQALANALANQAbAgAXAiQAcAoASArQAWA1AFA+QAIBJgDBLQgCAhgDAaQgHBLgTBKQgKArgUAkQglBIhCA3QgLAKgLAJQhPA+hVAfQgMAFgMADQgtAPgwAEQhIAHhLgGQiFgJh3gzQgEgBgEgCQgjgQgdgTQgagQgWgWQgTgSgOgUQgHgJgHgKQgCgDgBgDQgGgIgEgJQgqhKgdhOQglhhgRhwQgGgigBghg");
	this.shape_72.setTransform(65.7,68.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7AC943").s().p("AgZJiQiFgJh3gzIgIgDQgjgQgdgTQgagQgWgWQgTgSgOgUIgOgTIgDgGIgKgRQgqhKgdhOQglhhgRhwQgGgigBghQgBgeAFgbQAFggALgbQAJgdASgcQAvhQA/hOQAcgiAggjQAbgdAYgZQA0g1A8gdQBSgnBggDQAhgBAkADQBFAGA0ARQBAATA2AoQBNA2BIBOIANAOIAWAaQAbAgAXAiQAcAoASArQAWA1AFA+QAIBJgDBLQgCAhgDAaQgHBLgTBKQgKArgUAkQglBIhCA3IgWATQhPA+hVAfIgYAIQgtAPgwAEQgnAEgoAAQgiAAgigDg");
	this.shape_73.setTransform(65.7,68.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#669933").ss(3).p("ApQgaQgBgdAFgcQAEggAKgcQAIgeAQgdQArhVA+hQQAbgiAggjQAbgdAZgYQA1gzA8geQBSgoBfgFQAkgCAiACQBFAFA1APQBBASA4AkQBRA0BJBNQAHAHAGAIQALAMALAOQAbAfAXAiQAcAoASArQAYA2AHA9QAKBIgCBMQgCAhgCAaQgHBMgUBJQgLAqgTAlQglBIg/A6QgLAKgMAKQhMBChWAiQgLAFgMAEQgtAQgwAHQhIAKhMgEQiHgHh2g0QgDgBgEgCQgjgQgdgTQgagRgXgVQgTgSgPgUQgIgIgHgKQgCgDgCgDQgGgIgFgJQguhIgfhOQgnhhgQhwQgFgkgBgfg");
	this.shape_74.setTransform(66.2,69);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#7AC943").s().p("AgRJnQiHgHh2g0IgHgDQgjgQgdgTQgagRgXgVQgTgSgPgUIgPgSIgEgGIgLgRQguhIgfhOQgnhhgQhwQgFgkgBgfIAAgBQgBgdAFgcQAEggAKgcQAIgeAQgdQArhVA+hQQAbgiAggjQAbgdAZgYQA1gzA8geQBSgoBfgFQAkgCAiACQBFAFA1APQBBASA4AkQBRA0BJBNIANAPIAWAaQAbAfAXAiQAcAoASArQAYA2AHA9QAKBIgCBMIgEA7QgHBMgUBJQgLAqgTAlQglBIg/A6IgXAUQhMBChWAiIgXAJQgtAQgwAHQg0AIg2AAIgqgCg");
	this.shape_75.setTransform(66.2,69);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#669933").ss(3).p("ApTgQQgBgeAEgbQAEghAIgdQAHggAOgeQAmhZA+hSQAbgiAggjQAbgdAZgXQA2gyA9gfQBSgoBegHQAkgDAiABQBGADA2AOQBCAQA7AiQBTAwBKBNQAHAHAHAHQALANALANQAbAgAXAiQAbAoATAqQAYA3AKA8QAMBIgBBNQgBAhgCAaQgHBNgUBIQgMAqgTAlQglBJg8A8QgLALgLAKQhMBFhUAmQgMAFgLAFQguASgwAJQhIANhMgDQiJgFh1g0QgDgCgEgCQgigPgegVQgagQgXgVQgTgRgRgUQgIgIgHgKQgCgDgDgCQgGgIgGgJQgzhHghhOQgphhgOhwQgFgjAAggg");
	this.shape_76.setTransform(66.8,69.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#7AC943").s().p("AgJJsQiJgFh1g0IgHgEQgigPgegVQgagQgXgVQgTgRgRgUIgPgSIgFgFIgMgRQgzhHghhOQgphhgOhwQgFgjAAggQgBgeAEgbQAEghAIgdQAHggAOgeQAmhZA+hSQAbgiAggjQAbgdAZgXQA2gyA9gfQBSgoBegHQAkgDAiABQBGADA2AOQBCAQA7AiQBTAwBKBNIAOAOIAWAaQAbAgAXAiQAbAoATAqQAYA3AKA8QAMBIgBBNQgBAhgCAaQgHBNgUBIQgMAqgTAlQglBJg8A8IgWAVQhMBFhUAmIgXAKQguASgwAJQg9ALhAAAIgXgBg");
	this.shape_77.setTransform(66.8,69.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#669933").ss(3).p("ApWgIQgBgdADgcQADggAHgfQAHghAMgfQAhheA9hTQAbgkAggiQAbgdAagXQA2gwA9gfQBSgoBegKQAkgEAiAAQBHACA3AMQBDAOA9AgQBWAtBMBNQAHAGAGAIQAMAMALANQAcAgAWAiQAbAoAUArQAYA2AMA8QAPBIgBBNQAAAhgCAaQgGBNgWBIQgMApgTAmQgkBJg7A/QgKAMgLALQhKBIhUApQgLAGgMAFQgtATgxALQhIARhNgBQiKgDh0g1QgDgCgEgCQghgQgfgUQgZgRgYgUQgTgRgSgTQgIgJgJgJQgCgDgCgCQgHgIgHgJQg3hFgjhOQgshhgMhwQgEgjAAggg");
	this.shape_78.setTransform(67.4,70);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7AC943").s().p("AgCJxQiKgDh0g1IgHgEQghgQgfgUQgZgRgYgUQgTgRgSgTIgRgSIgEgFIgOgRQg3hFgjhOQgshhgMhwQgEgjAAggIAAgBQgBgdADgcQADggAHgfQAHghAMgfQAhheA9hTQAbgkAggiQAbgdAagXQA2gwA9gfQBSgoBegKQAkgEAiAAQBHACA3AMQBDAOA9AgQBWAtBMBNIANAOIAXAZQAcAgAWAiQAbAoAUArQAYA2AMA8QAPBIgBBNQAAAhgCAaQgGBNgWBIQgMApgTAmQgkBJg7A/IgVAXQhKBIhUApIgXALQgtATgxALQhEAQhKAAIgHAAg");
	this.shape_79.setTransform(67.4,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(281.2,206,123.7,129);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
