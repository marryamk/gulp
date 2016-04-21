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
(lib.yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(3).p("AJbAAQAADziaCxQgLANgMAMQhRBUhfAuQhzA3iHAAQiHAAhyg3QhgguhQhUQixi4AAkFQAAkDCxi5QCwi4D5AAQD5AACxC4QAMANALANQCaCwAADyg");
	this.shape.setTransform(68,70.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("Aj5I/QhgguhQhUQixi5AAkEQAAkECxi4QCwi5D5ABQD5gBCxC5IAXAZQCaCxAADyQAADziaCxIgXAZQhRBUhgAuQhyA2iHABQiHgBhyg2g");
	this.shape_1.setTransform(68,70.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(3).p("ApWgIQAAgdADgbQADggAHgeQAHgjANghQAiheA+hTQAbgkAggjQAagbAbgXQA3gwA8geQBTgpBggKQAmgDAmABQA/ACA6ANQBDAQA9AhQBWAvBLBOQATAUAKANQAeAiAZAmQAaAnASAqQAYA3ALA7QAOBKgBBNQAAAdgCAcQgHBMgVBGQgMApgTAmQgkBJg7A+QgLAMgMALQhJBHhUApQgLAGgLAFQguAUgyAKQhJAQhPgBQiLgFhvg0QgCgBgDgBQghgPgegUQgZgRgWgTQgUgRgSgTQgKgKgKgMQgJgKgIgKQg4hGgjhQQgrhfgNhvQgEgjAAgig");
	this.shape_2.setTransform(67.3,69.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AgHJxQiLgFhvg0IgFgCQghgPgegUQgZgRgWgTQgUgRgSgTIgUgWIgRgUQg4hGgkhQQgqhfgNhvQgEgjAAgiQAAgdADgbQADggAHgeQAHgjAMghQAjheA+hTQAbgkAggjQAagbAbgXQA2gwA9geQBTgpBggKQAmgDAmABQA/ACA6ANQBDAQA8AhQBXAvBKBOQAUAUAKANQAeAiAZAmQAaAnASAqQAYA3ALA7QAOBKgBBNQAAAdgCAcQgHBMgVBGQgMApgTAmQglBJg6A+IgXAXQhJBHhUApIgWALQguAUgyAKQhDAPhJAAIgMAAg");
	this.shape_3.setTransform(67.3,69.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9900").ss(3).p("ApTgSQAAgdADgbQAEggAJgdQAIghAPgfQAnhZA/hSQAbgjAhgiQAZgcAbgYQA1gyA8gdQBUgpBggGQAmgDAlACQA/ADA4AQQBCARA7AkQBSAyBKBPQASAUALANQAeAjAZAlQAaAoASAqQAXA2AJA8QALBJgCBNQgBAdgCAcQgHBLgUBIQgMApgTAlQglBJg9A7QgLALgMALQhLBEhVAkQgLAFgLAFQguASgxAIQhJANhOgEQiJgHhxgyQgCgBgDgBQgigQgegUQgYgQgWgUQgUgRgRgUQgJgKgJgMQgIgKgIgKQgyhIgihQQgohfgOhvQgFgkgBghg");
	this.shape_4.setTransform(66.7,69.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AgPJrQiJgHhxgyIgFgCQgigQgegUQgYgQgWgUQgUgRgRgUQgJgKgJgMIgQgUQgyhIgihQQgohfgOhvQgFgkgBghQAAgdADgbQAEggAJgdQAIghAPgfQAnhZA/hSQAbgjAhgiQAZgcAbgYQA1gyA8gdQBUgpBggGQAmgDAlACQA/ADA4AQQBCARA7AkQBSAyBKBPIAdAhQAeAjAZAlQAaAoASAqQAXA2AJA8QALBJgCBNQgBAdgCAcQgHBLgUBIQgMApgTAlQglBJg9A7IgXAWQhLBEhVAkIgWAKQguASgxAIQg5AKg9AAIghgBg");
	this.shape_5.setTransform(66.7,69.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9900").ss(3).p("ApPgcQgBgdAEgbQAFgfAKgcQAJggARgdQAshVBAhPQAcgiAggjQAZgcAagZQA1gzA8gdQBTgoBhgEQAkgCAnADQA9AFA4ASQBBASA4AnQBPA1BIBQQASAUALANQAdAjAaAlQAaAoASAqQAWA2AHA8QAIBKgDBMQgBAdgDAcQgHBLgTBIQgLAqgUAlQglBHg/A5QgMALgMAKQhNBAhWAhQgLAEgLAEQguAQgxAGQhIAJhNgFQiIgJhygyQgDgBgCgBQgjgQgegTQgYgQgWgUQgTgSgQgUQgJgKgHgNQgIgKgGgLQguhJgfhPQgmhggQhvQgGglAAggg");
	this.shape_6.setTransform(66,68.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AgXJmQiIgJhygyIgFgCQgjgQgegTQgYgQgWgUQgTgSgQgUQgJgKgHgNIgOgVQguhJgfhPQgmhggQhvQgGglAAggQgBgdAEgbQAFgfAKgcQAJggARgdQAshVBAhPQAcgiAggjQAZgcAagZQA1gzA8gdQBTgoBhgEQAkgCAnADQA9AFA4ASQBBASA4AnQBPA1BIBQQASAUALANQAdAjAaAlQAaAoASAqQAWA2AHA8QAIBKgDBMIgEA5QgHBLgTBIQgLAqgUAlQglBHg/A5IgYAVQhNBAhWAhIgWAIQguAQgxAGQguAGgxAAQgcAAgagCg");
	this.shape_7.setTransform(66,68.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF9900").ss(3).p("ApMgmQgBgdAFgbQAGggAMgaQAJgeAUgcQAxhPBAhNQAdgiAggkQAZgbAZgaQA0g1A8gcQBSgoBigBQAkgBAmAEQA+AHA3ATQA/AUA1ApQBMA5BGBQQASAUALAOQAdAiAaAmQAbAnARAqQAWA2AEA9QAGBKgEBMQgCAdgDAbQgIBLgSBJQgLArgTAkQgmBGhCA3QgLAJgNAKQhOA9hXAdQgLAEgLADQguAOgwAEQhJAFhMgGQiGgMh0gyQgDgBgCAAQgkgQgdgSQgZgQgVgVQgSgTgPgUQgIgLgHgMQgHgKgGgLQgohLgdhPQgjhggShwQgHgjgBghg");
	this.shape_8.setTransform(65.3,68.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AgfJhQiGgMh0gyIgFgBQgkgQgdgSQgZgQgVgVQgSgTgPgUQgIgLgHgMIgNgVQgohLgdhPQgjhggShwQgHgjgBghIAAAAQgBgdAFgbQAGggAMgaQAJgeAUgcQAxhPBAhNQAdgiAggkIAyg1QA0g1A8gcQBSgoBigBQAkgBAmAEQA+AHA3ATQA/AUA1ApQBMA5BGBQIAdAiQAdAiAaAmQAbAnARAqQAWA2AEA9QAGBKgEBMIgFA4QgIBLgSBJQgLArgTAkQgmBGhCA3IgYATQhOA9hXAdIgWAHQguAOgwAEQgiACgiAAQgpAAgogDg");
	this.shape_9.setTransform(65.3,68.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF9900").ss(3).p("ApJgwQgBgeAGgaQAGggAOgZQAKgcAWgbQA2hKBAhLQAdghAggkQAZgbAZgbQA0g3A6gcQBTgnBiABQAkABAmAFQA9AIA2AVQA9AWAzAsQBIA8BGBQQASAVAKAOQAdAiAaAmQAcAnAQAqQAVA1ACA/QADBIgFBMQgCAdgDAcQgJBKgRBKQgKArgTAjQgnBGhEA0QgMAJgNAJQhPA5hYAaQgLADgLADQguAMgwACQhJABhLgIQiDgPh3gwQgCgBgDgBQglgPgcgSQgZgQgVgVQgSgTgNgVQgIgLgGgMQgGgLgFgLQgjhMgbhQQghhfgUhwQgHgkgBggg");
	this.shape_10.setTransform(64.7,67.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("AgoJbQiDgPh3gwIgFgCQglgPgcgSQgZgQgVgVQgSgTgNgVQgIgLgGgMIgLgWQgjhMgbhQQghhfgUhwQgHgkgBggQgBgeAGgaQAGggAOgZQAKgcAWgbQA2hKBAhLIA9hFIAyg2QA0g3A6gcQBTgnBiABQAkABAmAFQA9AIA2AVQA9AWAzAsQBIA8BGBQIAcAjQAdAiAaAmQAcAnAQAqQAVA1ACA/QADBIgFBMIgFA5QgJBKgRBKQgKArgTAjQgnBGhEA0IgZASQhPA5hYAaIgWAGQguAMgwACIgWAAQg+AAhAgHg");
	this.shape_11.setTransform(64.7,67.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF9900").ss(3).p("ApHg8QgBgdAGgbQAIgfAPgYQALgaAYgZQA7hFBBhKQAeggAggkQAYgcAZgbQAyg5A7gbQBSgnBhAEQAmACAlAGQA9AJA1AXQA8AYAwAvQBFA+BEBRQARAWALANQAcAjAbAlQAcAoAQAqQAUA1AAA/QAABIgGBMQgDAdgDAbQgJBKgQBLQgJArgUAjQgnBGhHAwQgMAJgNAJQhQA1hZAVQgMADgLADQguAKgwgBQhIgChKgKQiCgRh4gvQgDgBgCgBQgmgPgcgSQgZgQgUgVQgSgUgMgVQgHgLgFgNQgFgKgFgMQgehNgZhQQgehggVhwQgIgkgCgfg");
	this.shape_12.setTransform(64.2,67.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("ABhJgQhIgChKgKQiCgRh4gvIgFgCQgmgPgcgSQgZgQgUgVQgSgUgMgVQgHgLgFgNIgKgWQgehNgZhQQgehggVhwQgIgkgCgfIAAgBQgBgdAGgbQAIgfAPgYQALgaAYgZQA7hFBBhKIA+hEIAxg3QAyg5A7gbQBSgnBhAEQAmACAlAGQA9AJA1AXQA8AYAwAvQBFA+BEBRIAcAjQAcAjAbAlQAcAoAQAqQAUA1AAA/QAABIgGBMIgGA4QgJBKgQBLQgJArgUAjQgnBGhHAwIgZASQhQA1hZAVIgXAGQgsAJgtAAIgFAAg");
	this.shape_13.setTransform(64.2,67.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF9900").ss(3).p("ApFhHQgBgeAHgaQAIgfARgXQALgZAbgXQBAhABChIQAegfAfglQAZgbAYgcQAyg7A6gbQBSgmBhAHQAmACAlAHQA8AMA0AYQA7AZAuAyQBBBCBCBSQASAVAKAOQAcAiAbAmQAcAnAQAqQAUA1gDBAQgCBIgIBMQgDAcgDAcQgJBJgPBMQgJAsgUAiQgoBFhJAuQgMAIgOAIQhRAyhaARQgMADgLACQguAIgwgDQhHgGhKgLQh/gUh7gvQgCAAgDgBQgmgPgcgRQgZgQgUgWQgRgUgLgWQgGgLgFgNQgEgLgEgMQgZhPgXhPQgbhggYhuQgIgngCgfg");
	this.shape_14.setTransform(63.7,67);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("ABWJfQhHgGhKgLQh/gUh7gvIgFgBQgmgPgcgRQgZgQgUgWQgRgUgLgWQgGgLgFgNIgIgXQgZhPgXhPQgbhggYhuQgIgngCgfQgBgeAHgaQAIgfARgXQALgZAbgXQBAhABChIQAegfAfglIAxg3QAyg7A6gbQBSgmBhAHQAmACAlAHQA8AMA0AYQA7AZAuAyQBBBCBCBSIAcAjQAcAiAbAmQAcAnAQAqQAUA1gDBAQgCBIgIBMIgGA4QgJBJgPBMQgJAsgUAiQgoBFhJAuIgaAQQhRAyhaARIgXAFQgiAFgiAAIgaAAg");
	this.shape_15.setTransform(63.7,67);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF9900").ss(3).p("ApDhTQgCgeAIgaQAJgeASgWQAMgXAdgWQBFg7BChGQAfgfAfgkQAZgcAXgdQAxg8A6gbQBSglBiAJQAlADAlAJQA7ANA0AaQA5AbAsA0QA9BGBBBRQARAWALAOQAbAjAcAlQAdAoAPAqQATA0gGBAQgEBJgJBLQgDAdgEAbQgKBIgOBNQgIAtgUAiQgoBDhLAsQgNAIgOAHQhTAuhbAOQgMACgLABQguAGgvgFQhIgJhIgOQh+gVh8guQgDgBgCgBQgogPgagQQgagQgTgXQgRgUgKgXQgGgKgDgOQgEgLgDgMQgThQgVhQQgZhfgZhvQgKgogBgdg");
	this.shape_16.setTransform(63.2,66.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("ABLJdQhIgJhIgOQh+gVh8guIgFgCQgogPgagQQgagQgTgXQgRgUgKgXQgGgKgDgOIgHgXQgThQgVhQQgZhfgZhvQgKgogBgdIAAgBQgCgeAIgaQAJgeASgWQAMgXAdgWQBFg7BChGQAfgfAfgkIAwg5QAxg8A6gbQBSglBiAJQAlADAlAJQA7ANA0AaQA5AbAsA0QA9BGBBBRIAcAkQAbAjAcAlQAdAoAPAqQATA0gGBAQgEBJgJBLIgHA4QgKBIgOBNQgIAtgUAiQgoBDhLAsIgbAPQhTAuhbAOIgXADQgYADgZAAQgWAAgWgCg");
	this.shape_17.setTransform(63.2,66.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF9900").ss(3).p("ApChfQgCgeAIgaQAKgeAUgVQANgWAggTQBJg3BDhDQAfgfAgglQAYgcAXgdQAwg+A5gaQBSglBiAMQAmAEAlAJQA6APAzAcQA3AcAqA4QA5BIBABTQARAWALAOQAbAiAcAmQAdAnAOAqQATA1gIBAQgHBJgKBKQgEAdgEAbQgKBIgNBOQgHAtgVAiQgpBChNApQgNAIgOAGQhVArhcAKQgLABgLABQgvAEgvgIQhFgMhKgPQh7gYh+guQgDgBgDAAQgogPgagQQgagQgTgXQgQgVgJgXQgFgKgCgPQgDgKgCgNQgPhRgThQQgWhggbhvQgKgogCgdg");
	this.shape_18.setTransform(62.8,66.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("AA/JaQhFgMhKgPQh7gYh+guIgGgBQgogPgagQQgagQgTgXQgQgVgJgXQgFgKgCgPIgFgXQgPhRgThQIgxjPQgKgogCgdIAAAAQgCgeAIgaQAKgeAUgVQANgWAggTQBJg3BDhDQAfgfAgglQAYgcAXgdQAwg+A5gaQBSglBiAMQAmAEAlAJQA6APAzAcQA3AcAqA4IB5CbIAcAkIA3BIQAdAnAOAqQATA1gIBAQgHBJgKBKIgIA4QgKBIgNBOQgHAtgVAiQgpBChNApIgbAOQhVArhcAKIgWACIgeABQgfAAghgFg");
	this.shape_19.setTransform(62.8,66.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF9900").ss(3).p("ApBhsQgCgeAJgaQALgeAVgTQAOgUAigSQBPgyBDhCQAggdAfgmQAXgbAYgfQAvg/A5gaQBRgkBjAOQAmAFAkALQA6AQAyAeQA2AeAnA6QA2BMA+BSQARAXAKAOQAbAiAcAmQAeAnAOAqQASA0gKBAQgLBLgKBKQgEAcgEAcQgLBHgMBOQgHAugVAhQgpBChQAmQgNAHgOAGQhWAnhdAGQgMABgLAAQgvACgugKQhFgPhJgRQh5gbiBgtQgCAAgDgBQgpgOgagQQgagQgSgYQgQgVgHgYQgFgKgCgOQgCgMgBgMQgJhTgRhQQgUhfgdhwQgLgpgCgbg");
	this.shape_20.setTransform(62.3,66.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC00").s().p("AA0JXIiOggQh5gbiBgtIgFgBQgpgOgagQQgagQgSgYQgQgVgHgYQgFgKgCgOQgCgMgBgMQgJhTgRhQQgUhfgdhwQgLgpgCgbIAAgBQgCgeAJgaQALgeAVgTQAOgUAigSQBPgyBDhCQAggdAfgmQAXgbAYgfQAvg/A5gaQBRgkBjAOQAmAFAkALQA6AQAyAeQA2AeAnA6QA2BMA+BSIAbAlIA3BIQAeAnAOAqQASA0gKBAIgVCVIgIA4IgXCVQgHAugVAhQgpBChQAmIgbANQhWAnhdAGIgXABIgQABQgnAAgmgJg");
	this.shape_21.setTransform(62.3,66.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF9900").ss(3).p("ApAh5QgDgeAKgaQAMgeAXgSQAOgSAlgQQBTgtBFhAQAggdAfgmQAXgbAXgfQAuhCA5gZQBRgkBjARQAmAHAkALQA5ASAxAfQA1AgAkA9QAzBPA8BTQARAXALAOQAaAiAdAmQAdAnAOAqQASA0gNBAQgNBMgLBJQgFAcgFAcQgKBGgLBQQgHAugVAhQgqBBhSAjQgNAGgPAGQhXAjheACQgMABgLAAQgvAAgugNQhEgThJgSQh3gdiCgtQgDAAgDgBQgpgOgagPQgagQgSgYQgPgWgHgYQgDgLgBgOQgCgMAAgMQgEhVgPhPQgShggehwQgMgpgCgbg");
	this.shape_22.setTransform(61.9,65.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC00").s().p("AAoJUIiNglQh3gdiCgtIgGgBQgpgOgagPQgagQgSgYQgPgWgHgYQgDgLgBgOQgCgMAAgMQgEhVgPhPQgShggehwQgMgpgCgbIAAgBQgDgeAKgaQAMgeAXgSQAOgSAlgQQBTgtBFhAQAggdAfgmQAXgbAXgfQAuhCA5gZQBRgkBjARQAmAHAkALQA5ASAxAfQA1AgAkA9QAzBPA8BTIAcAlIA3BIQAdAnAOAqQASA0gNBAQgNBMgLBJIgKA4IgVCWQgHAugVAhQgqBBhSAjIgcAMQhXAjheACIgXABQgvAAgugNg");
	this.shape_23.setTransform(61.9,65.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF9900").ss(3).p("Ao/iGQgDgeALgaQANgdAYgRQAPgRAngOQBZgoBEg+QAhgcAfgmQAXgcAWggQAuhDA4gZQBRgjBkAUQAlAHAkAMQA5AUAwAhQAzAhAiBAQAvBSA7BUQARAXAKAOQAaAjAdAlQAfAoANAqQARAzgQBBQgPBLgMBJQgGAdgEAbQgMBGgKBQQgGAvgVAgQgqBAhVAhQgNAGgPAFQhZAfhfgBQgMAAgLgBQgvgCgtgPQhFgWhHgVQh2gfiEgrQgDgBgCgBQgrgOgYgOQgbgQgRgZQgPgWgFgZQgEgKAAgPQgBgMABgNQABhVgMhQQgQhggghwQgNgqgCgag");
	this.shape_24.setTransform(61.5,65.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC00").s().p("ACQJjIgXgBQgvgCgtgPQhFgWhHgVQh2gfiEgrIgFgCQgrgOgYgOQgbgQgRgZQgPgWgFgZQgEgKAAgPQgBgMABgNQABhVgMhQQgQhggghwQgNgqgCgaIAAgBQgDgeALgaQANgdAYgRQAPgRAngOQBZgoBEg+QAhgcAfgmQAXgcAWggQAuhDA4gZQBRgjBkAUQAlAHAkAMQA5AUAwAhQAzAhAiBAQAvBSA7BUIAbAlIA3BIQAfAoANAqQARAzgQBBQgPBLgMBJIgKA4QgMBGgKBQQgGAvgVAgQgqBAhVAhIgcALQhVAehbAAIgIAAg");
	this.shape_25.setTransform(61.5,65.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF9900").ss(3).p("Ao+iTQgDgfAMgaQANgdAagQQAQgPApgMQBdgjBGg8QAhgcAegmQAXgcAWghQAthEA4gZQBQgjBlAXQAlAIAkANQA4AWAvAjQAyAiAgBDQArBWA6BUQAQAXAKAOQAaAjAeAlQAeAoANAqQAQAzgSBBQgSBMgNBIQgGAdgEAbQgMBFgJBSQgGAvgVAgQgrA/hXAeQgOAFgPAFQhaAbhggFQgMAAgLgBQgvgFgtgRQhEgahHgWQhzghiHgrQgCgBgDgBQgrgNgYgOQgbgQgRgZQgPgXgEgZQgCgLABgPQgBgMACgNQAGhXgKhQQgNhfgihxQgOgqgCgag");
	this.shape_26.setTransform(61.1,65.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("ACEJkIgXgBQgvgFgtgRQhEgahHgWQhzghiHgrIgFgCQgrgNgYgOQgbgQgRgZQgPgXgEgZQgCgLABgPQgBgMACgNQAGhXgKhQQgNhfgihxQgOgqgCgaIAAAAQgDgfAMgaQANgdAagQQAQgPApgMQBdgjBGg8QAhgcAegmQAXgcAWghQAthEA4gZQBQgjBlAXQAlAIAkANQA4AWAvAjQAyAiAgBDQArBWA6BUIAaAlIA4BIQAeAoANAqQAQAzgSBBQgSBMgNBIIgKA4QgMBFgJBSQgGAvgVAgQgrA/hXAeIgdAKQhNAXhQAAIgdgBg");
	this.shape_27.setTransform(61.1,65.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF9900").ss(3).p("Ao9ihQgEgfANgaQAOgcAbgPQARgNAsgLQBigeBGg6QAigbAegnQAXgcAVghQAshHA4gYQBQgiBlAZQAmAJAiAPQA4AWAvAlQAwAlAdBFQAoBZA4BUQAQAYALAOQAZAjAeAlQAfAoAMAqQAQAygUBDQgVBMgOBHQgHAdgFAbQgMBFgIBSQgFAwgVAfQgsA/hZAbQgOAFgQAEQhbAYhhgKQgMgBgLgBQgvgGgtgUQhEgdhGgYQhxgkiIgqQgDgBgDAAQgsgOgYgOQgbgPgQgaQgOgXgDgaQgCgKACgQQAAgMACgNQAMhZgIhPQgLhggjhxQgPgrgCgYg");
	this.shape_28.setTransform(60.7,65.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC00").s().p("AB4JlIgXgCQgvgGgtgUQhEgdhGgYIj5hOIgGgBQgsgOgYgOQgbgPgQgaQgOgXgDgaQgCgKACgQIACgZQAMhZgIhPQgLhggjhxQgPgrgCgYIAAgBQgEgfANgaQAOgcAbgPQARgNAsgLQBigeBGg6QAigbAegnQAXgcAVghQAshHA4gYQBQgiBlAZQAmAJAiAPQA4AWAvAlQAwAlAdBFQAoBZA4BUIAbAmIA3BIQAfAoAMAqQAQAygUBDQgVBMgOBHIgMA4QgMBFgIBSQgFAwgVAfQgsA/hZAbIgeAJQhBARhFAAQgbAAgbgDg");
	this.shape_29.setTransform(60.7,65.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF9900").ss(3).p("Ao8ivQgEgfANgaQAPgcAdgOQASgMAtgJQBogZBGg4QAigaAfgnQAWgdAVgiQAshIA2gXQBPgiBnAcQAmAKAiAPQA3AZAuAnQAuAlAbBJQAkBcA4BVQAQAYAKAOQAZAjAeAlQAgAoAMAqQAOAxgWBEQgYBMgPBHQgHAcgFAbQgNBFgHBTQgEAwgWAfQgsA+hbAYQgPAFgQADQhcAUhigNQgMgBgMgCQgugJgrgVQhGghhEgaQhwgmiKgpQgDgBgDgBQgtgNgXgNQgbgQgQgaQgOgYgBgaQgBgKACgRQABgLADgOQARhagGhQQgIhfgmhxQgPgsgCgYg");
	this.shape_30.setTransform(60.3,65.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC00").s().p("ABsJmIgYgDQgugJgrgVQhGghhEgaQhwgmiKgpIgGgCQgtgNgXgNQgbgQgQgaQgOgYgBgaQgBgKACgRQABgLADgOQARhagGhQQgIhfgmhxQgPgsgCgYIAAAAQgEgfANgaQAPgcAdgOQASgMAtgJQBogZBGg4QAigaAfgnQAWgdAVgiQAshIA2gXQBPgiBnAcQAmAKAiAPQA3AZAuAnQAuAlAbBJQAkBcA4BVIAaAmQAZAjAeAlQAgAoAMAqQAOAxgWBEQgYBMgPBHIgMA3QgNBFgHBTQgEAwgWAfQgsA+hbAYQgPAFgQADQg5AMg6AAQglAAgmgFg");
	this.shape_31.setTransform(60.3,65.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF9900").ss(3).p("Ao8i/QgDgfANgZQAQgdAfgMQASgKAwgIQBtgTBHg3QAigZAfgoQAWgcAUgjQArhKA2gWQBOgiBoAfQAmALAiAQQA3AaAsApQAtAnAZBLQAgBfA2BWQAQAYAKAPQAZAiAeAmQAgAnAMAqQAOAxgZBFQgaBMgRBGQgHAdgFAbQgNBEgGBUQgEAxgWAeQgtA9heAWQgOADgQADQheARhjgRQgMgCgMgCQgvgLgqgXQhFglhEgbQhugpiMgpQgDAAgDgBQgtgNgXgNQgbgPgQgbQgNgYAAgbQgBgLADgQQACgMAEgOQAWhbgEhQQgGhegnhzQgQgsgDgXg");
	this.shape_32.setTransform(59.9,65.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC00").s().p("ABgJmIgYgEQgvgLgqgXQhFglhEgbQhugpiMgpIgGgBQgtgNgXgNQgbgPgQgbQgNgYAAgbQgBgLADgQIAGgaQAWhbgEhQQgGhegnhzQgQgsgDgXIAAgBQgDgfANgZQAQgdAfgMQASgKAwgIQBtgTBHg3QAigZAfgoQAWgcAUgjQArhKA2gWQBOgiBoAfQAmALAiAQQA3AaAsApQAtAnAZBLQAgBfA2BWIAaAnQAZAiAeAmQAgAnAMAqQAOAxgZBFQgaBMgRBGIgMA4QgNBEgGBUQgEAxgWAeQgtA9heAWIgeAGQgvAJgxAAQgwAAgxgJg");
	this.shape_33.setTransform(59.9,65.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF9900").ss(3).p("Ao7jOQgEgfAOgaQARgcAggLQATgIAzgGQBxgPBIg0QAjgZAegoQAWgcAUgkQAqhLA2gXQBNghBpAhQAlAMAiASQA2AcAsAqQAsApAWBOQAdBiA0BWQAQAZAKAOQAYAjAfAlQAgAoALAqQAOAwgcBGQgcBNgSBFQgHAdgGAaQgNBEgFBVQgEAxgWAeQgtA8hgATQgPADgRADQhfANhkgVQgMgCgLgDQgvgNgqgaQhFgohEgdQhrgriOgoQgDgBgDAAQgugNgWgMQgcgQgPgbQgNgZABgbQAAgLAEgQQADgMAEgPQAbhcgChQQgDhegphzQgQgtgDgWg");
	this.shape_34.setTransform(59.5,65.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC00").s().p("ABTJmIgXgFQgvgNgqgaQhFgohEgdQhrgriOgoIgGgBQgugNgWgMQgcgQgPgbQgNgZABgbQAAgLAEgQIAHgbQAbhcgChQQgDhegphzQgQgtgDgWIAAgBQgEgfAOgaQARgcAggLQATgIAzgGQBxgPBIg0QAjgZAegoQAWgcAUgkQAqhLA2gXQBNghBpAhQAlAMAiASQA2AcAsAqQAsApAWBOQAdBiA0BWIAaAnQAYAjAfAlQAgAoALAqQAOAwgcBGQgcBNgSBFIgNA3QgNBEgFBVQgEAxgWAeQgtA8hgATIggAGQglAFglAAQg8AAg9gNg");
	this.shape_35.setTransform(59.5,65.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF9900").ss(3).p("Ao7jdQgEggAPgZQASgcAigKQATgGA1gFQB3gKBIgyQAjgYAfgoQAVgdAUgkQAphNA1gWQBOghBpAkQAmANAhATQA2AdAqAsQAqArAUBQQAZBmA0BWQAPAZAKAPQAYAjAfAlQAhAoALAqQAMAwgdBGQggBNgSBFQgIAcgGAbQgOBDgEBWQgDAygWAdQguA7hjARQgPACgQACQhhAKhlgZQgMgDgMgEQgvgOgpgcQhFgshCgfQhqgtiQgnQgDgBgDAAQgvgNgWgMQgbgPgPgcQgNgZADgcQAAgLAFgRQAEgMAFgOQAghfAAhPQAAhegrh0QgRgugEgUg");
	this.shape_36.setTransform(59.1,65.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC00").s().p("ABHJmIgYgHQgvgOgpgcQhFgshCgfQhqgtiQgnIgGgBQgvgNgWgMQgbgPgPgcQgNgZADgcQAAgLAFgRIAJgaQAghfAAhPQAAhegrh0QgRgugEgUIAAgBQgEggAPgZQASgcAigKQATgGA1gFQB3gKBIgyQAjgYAfgoQAVgdAUgkQAphNA1gWQBOghBpAkQAmANAhATQA2AdAqAsQAqArAUBQQAZBmA0BWQAPAZAKAPQAYAjAfAlQAhAoALAqQAMAwgdBGQggBNgSBFIgOA3QgOBDgEBWQgDAygWAdQguA7hjARIgfAEQgcADgcAAQhGAAhIgSg");
	this.shape_37.setTransform(59.1,65.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF9900").ss(3).p("AI5AHQAMAyggBHQgxBtgTBbQgPBCgDBXQgCAzgWAcQg3BEh9AIQhiAGhmgdQg7gQg1gmQhLg0hHgiQhdgriXgmQgwgNgVgLQgcgPgOgcQgMgaADgcQADgSAPgmQAlhfAChQQAChegsh0QgTgvgDgUQgEggAQgZQASgbAjgJQAVgFA3gDQB7gFBJgwQA9gpAuhZQAohPA1gVQBOggBpAmQBiAkBEBLQAoAsASBTQAVBpAyBXQAeA1AzA7QAhAoAKAog");
	this.shape_38.setTransform(58.7,65.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC00").s().p("AA7JlQg7gQg1gmQhLg0hHgiQhdgriXgmQgwgNgVgLQgcgPgOgcQgMgaADgcQADgSAPgmQAlhfAChQQAChegsh0QgTgvgDgUQgEggAQgZQASgbAjgJQAVgFA3gDQB7gFBJgwQA9gpAuhZQAohPA1gVQBOggBpAmQBiAkBEBLQAoAsASBTQAVBpAyBXQAeA1AzA7QAhAoAKAoQAMAyggBHQgxBtgTBbQgPBCgDBXQgCAzgWAcQg3BEh9AIIgiABQhSAAhUgYg");
	this.shape_39.setTransform(58.7,65.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF9900").ss(3).p("Ao6jeQgEgfAPgZQARgcAigKQAUgHA1gEQB2gJBJgzQAjgYAfgpQAWgcATgkQAphNA1gWQBOghBpAkQAlANAiATQA2AeAqAsQAqAqAUBRQAZBmAzBWQAQAbAKAOQAYAjAfAkQAgAoALAqQAMAwgdBGQggBOgTBFQgIAcgFAaQgLAzgFA/QgBATgBAUQgDAygWAdQgvA8hkAQQgOACgQACQhhAJhkgZQgNgDgNgEQgtgOgqgcQhFgthEgfQhngtiTgnQgygNgWgMQgcgPgOgcQgNgZACgcQABgLAGgUQADgLAFgNQAhheAAhPQgBg4gOg9QgLgtgSgwQgRgugDgVg");
	this.shape_40.setTransform(59.1,65.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC00").s().p("ABHJmIgagHQgtgOgqgcQhFguhEgeQhngtiTgnQgygOgWgMQgcgOgOgcQgNgZACgcQABgMAGgTIAIgYQAhheAAhQQgBg3gOg9QgLgtgSgwQgRgugDgWIAAAAQgEgfAPgZQARgcAigKQAUgHA1gEQB2gJBJgzQAjgZAfgoQAWgcATgkQAphNA1gXQBOggBpAkQAlANAiATQA2AeAqArQAqArAUBRQAZBlAzBXIAaApQAYAjAfAkQAgAnALArQAMAvgdBHQggBOgTBFQgIAcgFAZQgLA0gFA/IgCAmQgDAzgWAdQgvA7hkAQIgeAFQgaACgaAAQhIAAhJgSg");
	this.shape_41.setTransform(59.1,65.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF9900").ss(3).p("Ao7jPQgEgfAOgaQARgcAggLQATgIAzgGQBygOBIg0QAjgZAfgoQAWgdATgjQAqhMA2gWQBNghBpAiQAmAMAiARQA2AdArAqQArApAWBOQAdBjA0BWQARAaAKAOQAYAiAeAlQAhAnAKAqQAOAxgcBGQgdBNgSBGQgHAcgFAaQgLAzgFA/QgCATgBATQgDAygWAdQguA9hiATQgOADgPACQhhAMhjgVQgNgCgMgEQgugMgpgaQhGgqhEgcQhqgriRgoQgxgOgWgMQgcgPgPgbQgNgZABgbQAAgMAFgTQADgLAEgMQAbhdgChQQgBg4gPg9QgKgsgRgwQgRgugDgWg");
	this.shape_42.setTransform(59.5,65.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC00").s().p("ABSJmIgZgGQgugMgpgaQhGgqhEgcQhqgriRgoQgxgOgWgMQgcgPgPgbQgNgZABgbQAAgMAFgTIAHgXQAbhdgChQQgBg4gPg9QgKgsgRgwQgRgugDgWIAAAAQgEgfAOgaQARgcAggLQATgIAzgGQBygOBIg0QAjgZAfgoQAWgdATgjQAqhMA2gWQBNghBpAiQAmAMAiARQA2AdArAqQArApAWBOQAdBjA0BWIAbAoQAYAiAeAlQAhAnAKAqQAOAxgcBGQgdBNgSBGQgHAcgFAaQgLAzgFA/IgDAmQgDAygWAdQguA9hiATIgdAFQgkAEgkAAQg9AAg/gNg");
	this.shape_43.setTransform(59.5,65.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF9900").ss(3).p("Ao8jBQgDgfANgZQAQgcAfgNQASgJAxgIQBtgTBHg2QAjgaAfgnQAWgcAUgjQAqhKA3gXQBOghBoAfQAlALAjAQQA2AbAsApQAtAnAYBMQAgBgA2BVQARAaAKAOQAYAiAeAlQAgAnALAqQAOAxgZBFQgbBNgRBHQgGAbgFAbQgKA0gGA+QgCASgBAUQgEAxgWAeQguA9hfAWQgOADgPADQhfAQhigSQgNgCgMgCQgugLgqgYQhGgmhFgbQhsgpiOgoQgxgOgWgNQgcgPgPgbQgOgYAAgbQAAgLAEgTQACgLADgMQAXhcgEhPQgDg4gPg9QgKgsgRgxQgQgtgDgWg");
	this.shape_44.setTransform(59.8,65.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC00").s().p("ABeJmIgZgEQgugLgqgYQhGgmhFgbQhsgpiOgoQgxgOgWgNQgcgPgPgbQgOgYAAgbQAAgLAEgTQACgLADgMQAXhcgEhPQgDg4gPg9QgKgsgRgxQgQgtgDgWIAAgBQgDgfANgZQAQgcAfgNQASgJAxgIQBtgTBHg2QAjgaAfgnQAWgcAUgjQAqhKA3gXQBOghBoAfQAlALAjAQQA2AbAsApQAtAnAYBMQAgBgA2BVIAbAoQAYAiAeAlQAgAnALAqQAOAxgZBFQgbBNgRBHIgLA2QgKA0gGA+IgDAmQgEAxgWAeQguA9hfAWIgdAGQgtAHguAAQgzAAgzgJg");
	this.shape_45.setTransform(59.8,65.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF9900").ss(3).p("Ao8izQgEgeAOgaQAOgcAegOQASgLAugJQBogYBHg4QAigaAfgnQAWgdAVghQArhJA3gXQBOgiBnAcQAmALAjAPQA3AZAtAnQAuAmAaBJQAkBdA3BVQARAZAKAOQAZAjAdAkQAgAoAMAqQAOAwgXBFQgYBNgQBHQgGAcgFAaQgKA0gGA+QgCATgCATQgEAxgWAeQgtA+hdAYQgOAEgOADQheAUhhgOQgNgBgMgDQgugJgqgVQhGgjhGgaQhugmiMgpQgwgOgXgNQgcgQgPgaQgOgYgBgaQgCgLAEgTQABgKADgMQARhbgGhPQgEg4gPg8QgKgtgQgwQgQgtgCgXg");
	this.shape_46.setTransform(60.2,65.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC00").s().p("ABqJmIgZgEQgugJgqgVQhGgjhGgaQhugmiMgpQgwgOgXgNQgcgQgPgaQgOgYgBgaQgCgLAEgTQABgKADgMQARhbgGhPQgEg4gPg8QgKgtgQgwQgQgtgCgXIAAgBQgEgeAOgaQAOgcAegOQASgLAugJQBogYBHg4QAigaAfgnQAWgdAVghQArhJA3gXQBOgiBnAcQAmALAjAPQA3AZAtAnQAuAmAaBJQAkBdA3BVIAbAnQAZAjAdAkQAgAoAMAqQAOAwgXBFQgYBNgQBHIgLA2QgKA0gGA+IgEAmQgEAxgWAeQgtA+hdAYIgcAHQg4AMg4AAQgoAAgngGg");
	this.shape_47.setTransform(60.2,65.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF9900").ss(3).p("Ao9ilQgDgfAMgZQAOgdAcgPQARgMAsgLQBkgdBGg5QAigbAfgnQAWgcAVghQAshHA3gYQBQgiBlAaQAmAJAkAPQA3AXAuAlQAvAlAdBGQAnBaA4BUQARAZALAOQAZAjAdAkQAfAoAMAqQAPAxgUBDQgWBNgPBIQgGAcgEAaQgKA1gGA9QgDASgCAUQgEAwgWAfQgsA/hbAaQgOAFgOADQhcAXhhgKQgMgBgNgCQgtgHgtgTQhEgfhHgYQhvgkiLgqQgvgOgYgOQgbgPgQgaQgPgYgCgZQgCgMADgSQAAgKACgMQANhZgIhQQgGg4gOg8QgLgsgPgwQgPgsgCgZg");
	this.shape_48.setTransform(60.6,65.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC00").s().p("AB1JlIgZgDQgtgHgtgTQhEgfhHgYQhvgkiLgqQgvgOgYgOQgbgPgQgaQgPgYgCgZQgCgMADgSIACgWQANhZgIhQQgGg4gOg8QgLgsgPgwQgPgsgCgZQgDgfAMgZQAOgdAcgPQARgMAsgLQBkgdBGg5QAigbAfgnQAWgcAVghQAshHA3gYQBQgiBlAaQAmAJAkAPQA3AXAuAlQAvAlAdBGQAnBaA4BUIAcAnQAZAjAdAkQAfAoAMAqQAPAxgUBDQgWBNgPBIIgKA2QgKA1gGA9IgFAmQgEAwgWAfQgsA/hbAaIgcAIQhAAQhDAAQgdAAgdgDg");
	this.shape_49.setTransform(60.6,65.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF9900").ss(3).p("Ao9iXQgEgfAMgaQAOgdAagPQAQgPAqgMQBfghBGg8QAhgbAfgnQAXgcAVghQAthFA3gYQBQgjBlAYQAmAIAkAOQA4AWAuAjQAxAjAfBEQAqBWA6BUQARAZALAOQAZAiAdAlQAfAnAMAqQAQA0gSBBQgTBNgOBIQgGAcgEAaQgJA1gHA8QgDATgCATQgFAwgVAfQgsBAhZAdQgNAFgOAEQhcAbhfgHQgNAAgMgCQgtgFgtgRQhFgchHgWQhygiiJgqQgugPgYgOQgbgPgRgaQgOgXgEgZQgCgLABgSQAAgKACgMQAHhYgKhPQgHg4gOg+QgLgrgOgwQgOgrgCgZg");
	this.shape_50.setTransform(60.9,65.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC00").s().p("ACBJkIgZgCQgtgFgtgRQhFgchHgWIj7hMQgugPgYgOQgbgPgRgaQgOgXgEgZQgCgLABgSIACgWQAHhYgKhPQgHg4gOg+QgLgrgOgwQgOgrgCgZQgEgfAMgaQAOgdAagPQAQgPAqgMQBfghBGg8QAhgbAfgnQAXgcAVghQAthFA3gYQBQgjBlAYQAmAIAkAOQA4AWAuAjQAxAjAfBEQAqBWA6BUIAcAnQAZAiAdAlQAfAnAMAqQAQA0gSBBQgTBNgOBIIgKA2QgJA1gHA8IgFAmQgFAwgVAfQgsBAhZAdIgbAJQhKAWhMAAIglgCg");
	this.shape_51.setTransform(60.9,65.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF9900").ss(3).p("Ao+iKQgDgfALgaQAMgdAZgRQAQgQAngOQBbglBFg+QAggcAggmQAXgcAVggQAuhEA3gYQBRgjBkAUQAmAIAkANQA5AUAvAiQAyAhAiBBQAtBTA8BUQARAYAKAOQAaAjAcAkQAfAoANAqQAQAzgQBBQgQBMgNBJQgFAcgFAbQgIA1gIA7QgCATgDAUQgGAugVAgQgrBBhXAgQgMAFgOAFQhaAehegDQgNAAgMgBQgugDgtgPQhFgZhIgVQhzgfiHgrQgugPgZgPQgagPgRgZQgPgWgFgZQgDgLAAgRQAAgLABgLQAChXgMhPQgIg4gPg9QgLgrgNgwQgNgrgCgag");
	this.shape_52.setTransform(61.3,65.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC00").s().p("ACNJjIgZgBQgugDgtgPQhFgZhIgVQhzgfiHgrQgugPgZgPQgagPgRgZQgPgWgFgZQgDgLAAgRIABgWQAChXgMhPQgIg4gPg9QgLgrgNgwQgNgrgCgaQgDgfALgaQAMgdAZgRQAQgQAngOQBbglBFg+QAggcAggmQAXgcAVggQAuhEA3gYQBRgjBkAUQAmAIAkANQA5AUAvAiQAyAhAiBBQAtBTA8BUIAbAmIA2BHQAfAoANAqQAQAzgQBBQgQBMgNBJIgKA3QgIA1gIA7IgFAnQgGAugVAgQgrBBhXAgIgaAKQhSAbhVAAIgRAAg");
	this.shape_53.setTransform(61.3,65.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF9900").ss(3).p("Ao/h+QgDgeAKgaQAMgeAYgRQAOgSAmgQQBVgqBFg/QAggdAfgmQAYgcAWgfQAuhCA4gZQBRgkBjATQAmAGAlAMQA5ATAwAgQA0AgAjA+QAxBQA9BTQARAYALAOQAaAjAcAkQAeAoANAqQARAzgNBAQgOBNgMBJQgFAcgEAbQgIA1gIA7QgDATgDATQgGAvgVAgQgrBBhUAjQgNAFgNAGQhZAhhdABQgNAAgMAAQgtgBgtgNQhGgVhJgTQh1geiFgrQgtgPgZgPQgbgQgRgYQgQgWgFgYQgEgMAAgRQgCgKAAgLQgChVgOhQQgKg3gOg+QgLgrgNgwQgNgqgBgbg");
	this.shape_54.setTransform(61.7,65.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC00").s().p("AAlJTQhGgVhJgTQh1geiFgrQgtgPgZgPQgbgQgRgYQgQgWgFgYQgEgMAAgRQgCgKAAgLQgChVgOhQQgKg3gOg+IgYhbQgNgqgBgbQgDgeAKgaQAMgeAYgRQAOgSAmgQQBVgqBFg/QAggdAfgmQAYgcAWgfQAuhCA4gZQBRgkBjATQAmAGAlAMQA5ATAwAgQA0AgAjA+QAxBQA9BTIAcAmIA2BHQAeAoANAqQARAzgNBAIgaCWIgJA3IgQBwIgGAmQgGAvgVAgQgrBBhUAjIgaALQhZAhhdABIgZAAQgtgBgtgNg");
	this.shape_55.setTransform(61.7,65.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF9900").ss(3).p("ApAhxQgDgeAKgbQALgdAWgTQAOgTAjgSQBRgvBEhBQAggdAfgmQAYgcAWgeQAvhAA4gaQBRgkBjAQQAmAFAlALQA6ARAxAfQA1AeAmA7QA0BOA+BTQASAXAKAOQAaAiAcAlQAeAnAOAqQASA0gMBAQgLBMgLBKQgEAcgEAbQgIA1gJA7QgDATgDATQgHAugUAgQgqBDhSAlQgNAGgNAGQhXAlhdAEQgMABgMAAQguABgtgLQhGgShKgRQh3gbiDgtQgsgPgagPQgagQgSgYQgQgVgGgYQgFgLgBgRQgCgKgBgLQgHhUgQhPQgLg4gPg9QgLgtgMguQgMgqgBgbg");
	this.shape_56.setTransform(62.1,65.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFCC00").s().p("AAwJWIiQgjQh3gbiDgtQgsgPgagPQgagQgSgYQgQgVgGgYQgFgLgBgRQgCgKgBgLQgHhUgQhPQgLg4gPg9IgXhbQgMgqgBgbQgDgeAKgbQALgdAWgTQAOgTAjgSQBRgvBEhBQAggdAfgmQAYgcAWgeQAvhAA4gaQBRgkBjAQQAmAFAlALQA6ARAxAfQA1AeAmA7QA0BOA+BTIAcAlIA2BHQAeAnAOAqQASA0gMBAIgWCWIgIA3IgRBwIgGAmQgHAugUAgQgqBDhSAlIgaAMQhXAlhdAEIgYABIgEAAQgsAAgrgKg");
	this.shape_57.setTransform(62.1,65.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF9900").ss(3).p("ApBhlQgCgeAJgaQAKgeAUgUQAOgVAggTQBNg0BDhDQAfgeAgglQAYgcAXgeQAvg+A5gaQBRglBiAOQAnAEAlAKQA6AQAyAcQA2AdAoA5QA4BKBABSQARAYALAOQAaAiAcAkQAdAoAPAqQASA0gJA/QgJBMgKBLQgEAbgEAbQgHA2gJA6QgDATgDATQgIAtgUAiQgqBDhPAnQgNAHgNAGQhWAphbAIQgNABgMABQgtACgugIQhGgOhKgQQh6gZiBgtQgrgQgagQQgagPgTgXQgQgWgIgXQgFgLgCgQQgDgKgBgLQgMhSgShQQgMg3gPg9QgLgtgMgvQgLgpgBgcg");
	this.shape_58.setTransform(62.5,66.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCC00").s().p("AA7JZIiQgeQh6gZiBgtQgrgQgagQQgagPgTgXQgQgWgIgXQgFgLgCgQQgDgKgBgLQgMhSgShQQgMg3gPg9IgXhcQgLgpgBgcIAAAAQgCgeAJgaQAKgeAUgUQAOgVAggTQBNg0BDhDQAfgeAgglQAYgcAXgeQAvg+A5gaQBRglBiAOQAnAEAlAKQA6AQAyAcQA2AdAoA5IB4CcIAcAmIA2BGQAdAoAPAqQASA0gJA/QgJBMgKBLIgIA2IgQBwIgGAmQgIAtgUAiQgqBDhPAnIgaANQhWAphbAIIgZACIgUAAQgkAAgjgGg");
	this.shape_59.setTransform(62.5,66.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF9900").ss(3).p("ApChaQgCgeAIgaQAKgeATgVQAMgXAfgUQBHg5BDhEQAfgfAfglQAYgcAYgdQAwg9A5gaQBSglBhALQAnADAlAJQA7AOAyAbQA5AbAqA3QA7BHBBBRQASAYAKANQAbAjAbAkQAdAoAPAqQATA0gHBAQgGBKgJBLQgEAcgDAbQgIA2gJA6QgDATgDATQgIAsgUAiQgqBEhNAqQgMAHgNAHQhUAshbAMQgMACgNABQgtAEgugGQhGgLhLgOQh7gXiAguQgqgPgbgRQgagPgTgXQgQgVgJgXQgGgLgDgPQgDgKgCgLQgRhRgUhPQgOg4gPg9QgLgtgLguQgKgogBgdg");
	this.shape_60.setTransform(62.9,66.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCC00").s().p("ABGJbQhGgLhLgOQh7gXiAguQgqgPgbgRQgagPgTgXQgQgVgJgXQgGgLgDgPIgFgVQgRhRgUhPIgdh1IgWhbQgKgogBgdIAAgBQgCgeAIgaQAKgeATgVQAMgXAfgUQBHg5BDhEQAfgfAfglIAwg5QAwg9A5gaQBSglBhALQAnADAlAJQA7AOAyAbQA5AbAqA3QA7BHBBBRIAcAlIA2BHQAdAoAPAqQATA0gHBAQgGBKgJBLIgHA3IgRBwIgGAmQgIAsgUAiQgqBEhNAqIgZAOQhUAshbAMIgZADQgSACgTAAQgbAAgbgEg");
	this.shape_61.setTransform(62.9,66.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF9900").ss(3).p("ApEhOQgBgeAHgaQAJgfARgWQAMgYAcgWQBDg9BDhHQAegfAgglQAYgbAYgdQAxg7A5gbQBSglBhAIQAmACAmAIQA7ANA0AZQA5AaAtAzQA+BFBDBRQASAXAKANQAbAiAbAlQAdAnAPAqQAUA1gFA/QgDBKgIBMQgEAcgDAbQgHA3gKA5QgDASgEATQgIAsgUAjQgpBEhLAtQgLAIgNAHQhTAvhaAQQgMACgNACQgtAGgugEQhJgHhKgNQh9gUh9gvQgqgQgbgRQgZgPgUgWQgRgVgKgWQgGgLgFgPQgDgKgDgLQgWhPgWhQQgPg3gPg9QgLgtgKguQgJgogCgeg");
	this.shape_62.setTransform(63.4,66.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC00").s().p("ABRJdQhJgHhKgNQh9gUh9gvQgqgQgbgRQgZgPgUgWQgRgVgKgWQgGgLgFgPIgGgVIgsifIgeh0QgLgtgKguQgJgogCgeIAAAAQgBgeAHgaQAJgfARgWQAMgYAcgWQBDg9BDhHQAegfAgglIAwg4QAxg7A5gbQBSglBhAIQAmACAmAIQA7ANA0AZQA5AaAtAzQA+BFBDBRIAcAkQAbAiAbAlQAdAnAPAqQAUA1gFA/QgDBKgIBMIgHA3QgHA3gKA5IgHAlQgIAsgUAjQgpBEhLAtQgLAIgNAHQhTAvhaAQIgZAEQgbAEgdAAQgRAAgSgCg");
	this.shape_63.setTransform(63.4,66.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF9900").ss(3).p("ApFhDQgCgeAHgaQAIgfAQgXQALgaAagXQA+hDBChIQAeggAggkQAYgcAZgbQAxg6A6gbQBSgmBhAGQAmABAmAHQA8ALA0AXQA7AZAvAxQBCBBBDBRQATAWAKAOQAcAiAaAkQAcAoAQAqQAUA0gCA/QgBBKgHBNQgDAbgDAbQgHA3gKA5QgDATgEASQgJAsgUAjQgoBFhIAvQgMAJgNAHQhRAzhZATQgMADgNADQgtAIgugCQhJgEhLgLQh/gSh7gwQgpgQgcgRQgZgQgUgVQgSgUgLgWQgHgLgFgPQgEgKgEgKQgbhOgYhQQgQg3gPg9QgLgtgJgwQgJglgBgfg");
	this.shape_64.setTransform(63.8,67.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC00").s().p("ABcJfQhJgEhLgLQh/gSh7gwQgpgQgcgRQgZgQgUgVQgSgUgLgWQgHgLgFgPIgIgUQgbhOgYhQQgQg3gPg9QgLgtgJgwQgJglgBgfIAAAAQgCgeAHgaQAIgfAQgXQALgaAagXICAiLQAeggAggkIAxg3QAxg6A6gbQBSgmBhAGQAmABAmAHQA8ALA0AXQA7AZAvAxQBCBBBDBRIAdAkQAcAiAaAkQAcAoAQAqQAUA0gCA/QgBBKgHBNIgGA2QgHA3gKA5IgHAlQgJAsgUAjQgoBFhIAvIgZAQQhRAzhZATIgZAGQgkAGglAAIgSAAg");
	this.shape_65.setTransform(63.8,67.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF9900").ss(3).p("ApHg4QgBgdAGgbQAHgfAPgZQAKgbAYgZQA6hHBBhKQAdghAggjQAZgcAZgbQAyg4A6gbQBSgnBiADQAlABAmAGQA8AJA2AWQA8AXAxAuQBFA+BFBQQATAXAKANQAcAiAaAlQAcAnAQAqQAVA1AAA+QACBJgGBOQgDAcgDAbQgGA3gLA4QgDATgFATQgJArgUAjQgnBGhGAyQgMAJgMAIQhQA2hYAXQgMADgNADQgtAKgvAAQhJAAhLgKQiBgPh5gxQgpgQgcgRQgZgQgUgVQgSgUgMgVQgIgLgGgPQgFgJgEgKQgghNgahQQgSg3gPg8QgLgtgJgxQgIgkgBggg");
	this.shape_66.setTransform(64.3,67.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC00").s().p("AguJWQiBgPh5gxQgpgQgcgRQgZgQgUgVQgSgUgMgVQgIgLgGgPIgJgTQgghNgahQQgSg3gPg8QgLgtgJgxQgIgkgBggIAAAAQgBgdAGgbQAHgfAPgZQAKgbAYgZQA6hHBBhKIA9hEIAyg3QAyg4A6gbQBSgnBiADQAlABAmAGQA8AJA2AWQA8AXAxAuQBFA+BFBQIAdAkQAcAiAaAlQAcAnAQAqQAVA1AAA+QACBJgGBOIgGA3QgGA3gLA4IgIAmQgJArgUAjQgnBGhGAyIgYARQhQA2hYAXIgZAGQgtAKgvAAQhJAAhLgKg");
	this.shape_67.setTransform(64.3,67.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF9900").ss(3).p("ApJguQgCgdAGgbQAGgfANgaQAKgcAVgbQA1hMBBhMQAdghAggkQAZgbAZgaQAzg3A7gcQBSgnBhABQAlAAAnAFQA9AHA1AUQA+AWA0ArQBIA8BHBPQASAWALANQAcAjAaAkQAbAoARAqQAVA1ACA9QAFBJgFBOQgCAcgDAbQgGA4gLA4QgEASgEATQgLAqgTAkQgnBHhEA0QgLAKgMAIQhPA6hXAaQgMAEgMAEQgtAMgvACQhKADhMgIQiDgNh3gxQgogQgcgTQgZgPgVgVQgSgTgOgVQgIgLgHgOQgGgKgEgKQglhLgchQQgTg3gPg8QgLgtgIgwQgIgkAAghg");
	this.shape_68.setTransform(64.9,67.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC00").s().p("AgmJcQiDgNh3gxQgogQgcgTQgZgPgVgVQgSgTgOgVQgIgLgHgOIgKgUQglhLgchQQgTg3gPg8QgLgtgIgwQgIgkAAghQgCgdAGgbQAGgfANgaQAKgcAVgbQA1hMBBhMIA9hFIAyg1QAzg3A7gcQBSgnBhABQAlAAAnAFQA9AHA1AUQA+AWA0ArQBIA8BHBPIAdAjQAcAjAaAkQAbAoARAqQAVA1ACA9QAFBJgFBOIgFA3QgGA4gLA4IgIAlQgLAqgTAkQgnBHhEA0IgXASQhPA6hXAaIgYAIQgtAMgvACIgjABQg5AAg6gGg");
	this.shape_69.setTransform(64.9,67.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF9900").ss(3).p("ApMgkQgBgdAEgbQAGggAMgaQAIgeAUgdQAwhQBAhOQAcgiAggjQAagbAZgaQA0g1A7gcQBSgoBhgBQAlgCAoAEQA9AHA2ASQBAAUA1ApQBMA4BIBPQATAVALAOQAcAiAZAkQAbAoARAqQAWA1AFA9QAHBLgEBNQgCAcgCAbQgGA4gLA3QgEASgFATQgLAqgTAkQgmBIhCA3QgLAJgMAKQhOA9hVAeQgNAEgMAEQgtAOgvAFQhKAGhNgGQiFgMh1gxQgngQgdgTQgZgQgVgUQgTgTgOgUQgJgLgIgOQgGgJgGgKQgqhKgehQQgUg3gPg8QgLgtgHgwQgHgkAAghg");
	this.shape_70.setTransform(65.5,68.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC00").s().p("AgeJiQiFgMh1gxQgngQgdgTQgZgQgVgUQgTgTgOgUQgJgLgIgOIgMgTQgqhKgehQQgUg3gPg8QgLgtgHgwQgHgkAAghQgBgdAEgbQAGggAMgaQAIgeAUgdQAwhQBAhOQAcgiAggjIAzg1QA0g1A7gcQBSgoBhgBQAlgCAoAEQA9AHA2ASQBAAUA1ApQBMA4BIBPIAeAjQAcAiAZAkQAbAoARAqQAWA1AFA9QAHBLgEBNIgEA3QgGA4gLA3IgJAlQgLAqgTAkQgmBIhCA3IgXATQhOA9hVAeIgZAIQgtAOgvAFQglADgmAAQgmAAgmgDg");
	this.shape_71.setTransform(65.5,68.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF9900").ss(3).p("ApQgaQgBgdAFgbQAEggAKgcQAJggAQgeQAshVBAhPQAbgjAhgjQAZgbAagZQA1gzA7gdQBSgoBhgEQAngCAmADQA9AEA4ARQBAASA4AmQBQA1BJBPQATAVALAOQAcAiAZAkQAbAoASAqQAWA1AHA8QAKBLgDBOQgCAcgCAbQgGA4gLA2QgEATgGASQgLAqgTAlQglBIhAA6QgKAKgMAKQhNBBhUAhQgNAFgMAEQgtAQgvAHQhKAKhOgFQiHgJhzgyQgngRgdgTQgZgQgVgUQgTgSgQgUQgKgLgJgNQgGgJgGgKQgvhJgghPQgWg3gPg8QgLgtgHgwQgFglgBggg");
	this.shape_72.setTransform(66.1,68.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC00").s().p("AgWJnQiHgJhzgyQgngRgdgTQgZgQgVgUQgTgSgQgUQgKgLgJgNIgMgTQgvhJgghPQgWg3gPg8QgLgtgHgwQgFglgBggQgBgdAFgbQAEggAKgcQAJggAQgeQAshVBAhPQAbgjAhgjQAZgbAagZQA1gzA7gdQBSgoBhgEQAngCAmADQA9AEA4ARQBAASA4AmQBQA1BJBPIAeAjQAcAiAZAkQAbAoASAqQAWA1AHA8QAKBLgDBOIgEA3QgGA4gLA2QgEATgGASQgLAqgTAlQglBIhAA6IgWAUQhMBBhVAhIgZAJQgtAQgvAHQgxAGg0AAQgaAAgZgBg");
	this.shape_73.setTransform(66.1,68.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF9900").ss(3).p("ApTgRQAAgdADgbQAEggAJgdQAHghAPggQAnhZA/hSQAbgjAggjQAagbAbgYQA1gxA7geQBTgoBggHQAngDAmACQA+ADA5APQBCARA6AjQBTAyBKBOQATAVALAOQAdAiAZAkQAaAoASAqQAXA1AJA8QANBKgCBPQgBAbgDAcQgFA4gMA2QgEATgGASQgLApgTAlQglBKg9A8QgLAKgLALQhLBEhUAlQgMAGgMAFQgtARgwAJQhKANhPgDQiJgHhxgzQgmgQgegUQgYgQgWgTQgTgSgRgTQgLgLgJgNQgIgJgGgKQg0hHgihQQgXg3gPg7QgMgtgGgxQgFgkAAghg");
	this.shape_74.setTransform(66.7,69.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC00").s().p("AgOJsQiJgHhxgzQgmgQgegUQgYgQgWgTQgTgSgRgTQgLgLgJgNIgOgTQg0hHgihQQgXg3gPg7QgMgtgGgxQgFgkAAghQAAgdADgbQAEggAJgdQAHghAPggQAnhZA/hSQAbgjAggjQAagbAbgYQA1gxA7geQBTgoBggHQAngDAmACQA+ADA5APQBCARA6AjQBTAyBKBOIAeAjQAdAiAZAkQAaAoASAqQAXA1AJA8QANBKgCBPQgBAbgDAcQgFA4gMA2IgKAlQgLApgTAlQglBKg9A8IgWAVQhLBEhUAlIgYALQgtARgwAJQg7AKg/AAIgfAAg");
	this.shape_75.setTransform(66.7,69.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF9900").ss(3).p("ApWgIQgBgcADgcQADggAHgeQAHgjAMghQAjhfA+hTQAbgkAhgiQAZgbAbgYQA2gvA8geQBTgpBggJQAngEAmAAQA/ACA5ANQBDAQA9AgQBWAwBMBNQATAVALANQAdAiAZAkQAaAoASAqQAYA2ALA7QAPBKgBBPQAAAcgCAbQgFA5gNA2QgEASgGASQgMApgTAlQgkBKg7A/QgKALgLALQhKBIhTApQgMAGgMAFQgtAUgwALQhLAQhPgBQiLgFhvgzQglgRgfgUQgYgQgWgTQgUgRgSgTQgLgLgLgNQgIgJgHgJQg5hGgkhQQgYg2gPg8QgMgtgFgxQgEgjAAgig");
	this.shape_76.setTransform(67.4,69.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC00").s().p("AgGJxQiLgFhvgzQglgRgfgUQgYgQgWgTQgUgRgSgTQgLgLgLgNIgPgSQg5hGgkhQQgYg2gPg8QgMgtgFgxQgEgjAAgiQgBgcADgcQADggAHgeQAHgjAMghQAjhfA+hTQAbgkAhgiQAZgbAbgYQA2gvA8geQBTgpBggJQAngEAmAAQA/ACA5ANQBDAQA9AgQBWAwBMBNIAeAiQAdAiAZAkQAaAoASAqQAYA2ALA7QAPBKgBBPQAAAcgCAbQgFA5gNA2IgKAkQgMApgTAlQgkBKg7A/IgVAWQhKBIhTApIgYALQgtAUgwALQhFAPhKAAIgLAAg");
	this.shape_77.setTransform(67.4,69.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FF9900").ss(3).p("AJbAAQAABWgUBPQgjCNhjByQgLANgMAMQhRBUhfAuQhzA3iHAAQiHAAhyg3QhgguhQhUQh2h7gnidQgUhOAAhXQAAkDCxi5QCwi4D5AAQD5AACxC4QAMANALANQCaCwAADyg");
	this.shape_78.setTransform(68,70.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCC00").s().p("Aj5I/QhgguhQhUQh2h7gnidQgUhPAAhWQAAkECxi4QCwi5D5ABQD5gBCxC5IAXAZQCaCxAADyQAABWgUBPQgjCNhjByIgXAZQhRBUhgAuQhyA2iHABQiHgBhyg2g");
	this.shape_79.setTransform(68,70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(281.2,206,123.7,129);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;