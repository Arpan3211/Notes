# Where in a React component should you make an AJAX request


componentDidMount is where an AJAX request should be made in a React component. This method will be executed when the component “mounts” (is added to the DOM) for the first time. This method is only executed once during the component’s life. Importantly, you can’t guarantee the AJAX request will have resolved before the component mounts. If it doesn't, that would mean that you’d be trying to setState on an unmounted component, which would not work. Making your AJAX request in componentDidMount will guarantee that there is a component to update.
