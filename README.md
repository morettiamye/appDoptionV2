## [Appdoption](http://morettiamye.github.io/appdoptionv2/index.html)
Fall in love at first sight!


### Inspiration & Design Choices
Appdoption  was initially developed as part of a group project while attending the Northwestern University Full-Stack Web Development Bootcamp.  Now in version 2.0, it has evolved to take implement feedback from course instructors and fellow developers to become an even more improved version of itself.

Born out of my desire to make an Instagram-inspired method of browsing shelter pets, I built Appdoption to be image first.  My goal is for the user to essentially fall in love at first sight, without regard to the age or status of the animal available for adoption.  

Visually, Appdoption is heavily influenced by Instagram and was built to look similar.  No frameworks were used for building the UI, it is made with simple vanilla CSS.  The page is mobile-friendly as well.   Cat and Dog icons are provided by [Font Awesome](https://fontawesome.com/) and our paw logo came from a google search.  If it belongs to you please [let me know](mailto:amyemoretti@gmail.com) and I will be happy to credit you.

### Behind the Browser
Appdoption is built largely with vanilla Javascript, taking advantage of jQuery only to make the API calls to Petfinder.  I initially wanted to use the newer .fetch() approach but unfortunately due to its limitations with working with no-cors APIs, it wasn't available for use.  I also chose not to route the API through a backend as the Petfinder API explicitly says not to worry about hiding your API key.  This has allowed me to keep Appdoption as lightweight and easy to load as possible. 

All data is currently provided through the [Pet Finder API](https://www.petfinder.com/developers/api-key)

### How-To
Using Appdoption is simple.  Simply plug in the zipcode you would like to search, and click Search Cats or Search Dogs.  Appdoption currently only supports US zipcodes, but we hope to add international searches in the future.

### Future Iterations
* Improve the search results.  The Petfinder API is limited in what it returns (including not returning a direct URL to the pets profile), so I would love to work with any other APIs that may be available now or in the future.
* Information modal.  Adding a the ability to hover over a card and see additional information without having to directly go to Petfinder would be great.
* User accounts. Allow a user to tag favorites for repeat viewing.

### Special Thanks
Special thanks to [Mark Thompson](https://github.com/MarkTechson), [Nelly Sugu](https://github.com/jonly03), [Michael Doherty](https://github.com/mkdoh3), and [Poornima Sewak](https://github.com/poornimasewak) for their course instruction and help with making version 1, and all of their feedback on the project.

### August 2020 Update
Unfortunately Petfinder has moved to a new api and with it a major change in free developer acccess.  Security tokens now expire after 30 days of no pings to the API.  Rather than update this project and request keys as needed, I have chosen to archive this project.
