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

			/* beforeEach for asynchronous functions, wait for init() because it starts the
			 * execution of loadFeed()
			*/
			beforeEach(function(done){
				jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
				init();
				done();
			});

			// check the length of container (number of childs)
			it('at least one .entry element in the .feed container', function() {
				const container = $('.feed');
				expect(container.length).toBeGreaterThan(0);
			});
		});

		describe('New Feed Selection', function() {

			 /* the feed class is compared before and after running loadFeed() through
			 *	asynchronous beforeEach it (loadFeed() is stored in init())
			 */
			 const feed = $('.feed');
			 console.log(feed);

			 beforeEach(function(done){
				jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
				init();
				done();
			});

			it('feed content changes after the loadFeed function is executed', function() {
				const newFeed = $('.feed');
				console.log(newFeed);

				expect(newFeed).not.toBe(feed);
			});
		});
}());
