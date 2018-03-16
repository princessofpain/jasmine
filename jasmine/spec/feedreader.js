/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
		/* This is our first test suite - a test suite just contains
		* a related set of tests. This suite is all about the RSS
		* feeds definitions, the allFeeds constiable in our application.
		*/
		describe('RSS Feeds', function() {
				/* This is our first test - it tests to make sure that the
				 * allFeeds constiable has been defined and that it is not
				 * empty. Experiment with this before you get started on
				 * the rest of this project. What happens when you change
				 * allFeeds in app.js to be an empty array and refresh the
				 * page?
				 */
				it('are defined', function() {
					expect(allFeeds).toBeDefined();
					expect(allFeeds.length).not.toBe(0);
				});

				/* TODO: Write a test that loops through each feed
				 * in the allFeeds object and ensures it has a URL defined
				 * and that the URL is not empty.
				 */
				it('have URL', function() {
					for(let i = 0; i < allFeeds.length; i++) {
						const object = allFeeds[i];
						const objectLength = object.url.length;

						expect(objectLength).toBeGreaterThan(0);
					};
				});

				/* TODO: Write a test that loops through each feed
				 * in the allFeeds object and ensures it has a name defined
				 * and that the name is not empty.
				 */
				it('have name', function() {
					for(let i = 0; i < allFeeds.length; i++) {
						const object = allFeeds[i];
						const objectLength = object.name.length;

						expect(object.name).toBeDefined();
						expect(objectLength).toBeGreaterThan(0);
					};
				});

		});

		/* TODO: Write a new test suite named "The menu" */
		describe('The menu', function() {
				/* TODO: Write a test that ensures the menu element is
				 * hidden by default. You'll have to analyze the HTML and
				 * the CSS to determine how we're performing the
				 * hiding/showing of the menu element.
				 */
				 it('is hidden by default', function() {
				 		const menuClass = document.querySelector('body').className;

						expect(menuClass).toEqual('menu-hidden');
				 });

				 /* TODO: Write a test that ensures the menu changes
					* visibility when the menu icon is clicked. This test
					* should have two expectations: does the menu display when
					* clicked and does it hide when clicked again.
					*/

					/* check the class of th ebody after a click on the menu icon
					 * and recheck after another click
					*/
					it('check visibility when clicked', function() {
						const menu = document.querySelector('.menu-icon-link');

						menu.click();
						const newMenuClass = document.querySelector('body').className;
						expect(newMenuClass).not.toEqual('menu-hidden')

						menu.click();
						const menuClass = document.querySelector('body').className;
						expect(menuClass).toEqual('menu-hidden');
					});
		});


		/* TODO: Write a new test suite named "Initial Entries" */
		describe('Initial Entries', function() {
			/* TODO: Write a test that ensures when the loadFeed
			 * function is called and completes its work, there is at least
			 * a single .entry element within the .feed container.
			 * Remember, loadFeed() is asynchronous so this test will require
			 * the use of Jasmine's beforeEach and asynchronous done() function.
			 */

			/* beforeEach for asynchronous functions, wait for init() because it starts the
			 * execution of loadFeed()
			*/
			beforeEach(async function(done) {
				jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
				const feeds = await init();
				done();
			});

			// check the length of container (number of childs)
			it('at least one .entry element in the .feed container', function() {
				const container = $('.feed');
				expect(container.length).toBeGreaterThan(0);
			});
		});

		/* TODO: Write a new test suite named "New Feed Selection" */
		describe('New Feed Selection', function() {
			/* TODO: Write a test that ensures when a new feed is loaded
			 * by the loadFeed function that the content actually changes.
			 * Remember, loadFeed() is asynchronous.
			 */

			 /* the feed class is compared before and after running loadFeed() through
			 *	asynchronous beforeEach it (loadFeed() is stored in init())
			 */
			 const feed = $('.feed');
			 console.log(feed);

			 beforeEach(async function(done) {
				jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
				const feeds = await init();
				done();
			});

			it('feed content changes after the loadFeed function is executed', function() {
				const newFeed = $('.feed');
				console.log(newFeed);

				expect(newFeed).not.toBe(feed);
			})
		});
}());
