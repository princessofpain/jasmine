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
					const newMenuClass = $('body').hasClass('menu-hidden');
					expect(newMenuClass).toBe(false);

					menu.click();
					const menuClass = $('body').hasClass('menu-hidden');
					expect(menuClass).toBe(true);
				});
	});

	describe('Initial Entries', function() {
		/* beforeEach for asynchronous function loadFeed(), second argument is a callback
		*/
		beforeEach(function(done){
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
			loadFeed(0, done);
		});

		// check the length of container (number of childs)
		it('at least one .entry element in the .feed container', function() {
			const feedContainer = $('.feed').children().length;
			expect(feedContainer).toBeGreaterThan(0);
		});
	});

	describe('New Feed Selection', function() {
		let feed, otherFeed;
		 /* beforeEach for asynchronous function loadFeed(), second argument is a callback
		*/
		beforeEach(function(done){
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

			loadFeed(0, function() {
				feed = $('.feed h2').last().text();

				loadFeed(1, function() {
					otherFeed = $('.feed h2').last().text();
				});
				done()
			});
		});

		it('feed content changes after the loadFeed function is executed', function() {
			expect(otherFeed).not.toBe(feed);
		});
	});
}());
