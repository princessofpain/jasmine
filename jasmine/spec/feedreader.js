$(function() {
	describe('RSS Feeds', function() {
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		it('have URL', function() {
			for(let i = 0; i < allFeeds.length; i++) {
				const object = allFeeds[i];
				const objectLength = object.url.length;

				expect(objectLength).toBeGreaterThan(0);
			}
		});

		it('have name', function() {
			for(let i = 0; i < allFeeds.length; i++) {
				const object = allFeeds[i];
				const objectLength = object.name.length;

				expect(object.name).toBeDefined();
				expect(objectLength).toBeGreaterThan(0);
			}
		});
	});

	describe('The menu', function() {
			 it('is hidden by default', function() {
			 		const menuClassName = $('body').hasClass('menu-hidden');

					expect(menuClassName).toBe(true);
			 });

				/* check the class of th ebody after a click on the menu icon
				 * and recheck after another click
				*/
				it('check visibility when clicked', function() {
					const menu = document.querySelector('.menu-icon-link');

					menu.click();
					const menuClassName = $('body').hasClass('menu-hidden');
					expect(menuClassName).toBe(false);

					menu.click();
					const newMenuClassName = $('body').hasClass('menu-hidden');
					expect(newMenuClassName).toBe(true);
				});
	});

	describe('Initial Entries', function() {
		/* beforeEach for asynchronous function loadFeed(), second argument is a callback
		load a feed to check if the entry is added to the DOM
		*/
		beforeEach(function(done){
			loadFeed(0, done);
		});

		// check the length of container (number of childs)
		it('at least one .entry element in the .feed container', function() {
			const feedContainer = $('.entry').length;
			expect(feedContainer).toBeGreaterThan(0);
		});
	});

	describe('New Feed Selection', function() {
		let feed, otherFeed;
		 /* beforeEach for asynchronous function loadFeed(), second argument is a callback
		 check the last entry after loading the first feed, then load another feed and do the same (feeds are appended)
		*/
		beforeEach(function(done){
			loadFeed(0, function() {
				feed = $('.entry').last().contents();
				done();
			});

			loadFeed(1, function() {
				otherFeed = $('.entry').last().contents();
				done();
			});
		});

		it('feed content changes after the loadFeed function is executed', function() {
			expect(otherFeed).not.toBe(feed);
		});
	});
}());
