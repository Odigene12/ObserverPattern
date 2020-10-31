# Front End Observers

As promised, here's my example for observer pattern based in front end. In order to implement the pattern, I didn't do much from scratch. I'm using the latest Angular with a basic setup. There's a lot of files here, but a lot of that was just generated by the angular cli and you don't need to know what it's doing. 

## Setup

Once you clone this, you can run `npm install`

In order to start the app run `npm run-script ng serve` 

Once the project is done building it should be available at http://localhost:4200/

## Things to look at

**src/app/notifier.service.ts**

This is where I set up the rxjs observables. A lot of this is just syntax, but basically, this sets up the Observable that will send messages to any subscriber every second. The message contains a timestamp. 

In real life, this sort of thing is useful to notify the rest of the app when data changes. Like one component made changes to some data and another component needs to know. Or if you are using web sockets and the api/server-side notifies your app the data you're using has been changed and some of your components need to know. Either way, the usefulness of this service is that it can notify the pieces of the app that need to know (by those pieces subscribing to the observable in this service).

**src/app/app.component.ts**

This is the consumer of the observable's data. In this example, when we want to start listening for changes to the notifier we can just push the button (which calls startWatching). When we are done and don't care about the updates anymore, we can stop listening and push the button (which calls stopWatching). 

In this example, every time the subscription has a new message, it pushes the new message into the timestamps array. But once we stopWatching, we don't get any more updates and the timestamps array is cleared out. It's interesting to note that just because you unsubscribe doesn't mean that the service's timer isn't still going. If you want to see that in action, you can uncomment line 21 in the NotifierService.

In real life, you might only care about some kinds of updates, so the component can basically check each notification "Do I care about this update? If yes, do something. If no, ignore and keep watching." For example: If the component was a nav bar that has something like "Welcome, {{first_name}}!" in it, and your component is notified that the user's first_name has changed, you'll want to update the nav bar text with the new first_name. If your component is notified that the user's zip code has changed, your nav bar may ignore that update because the information is irrelevant to the nav bar.