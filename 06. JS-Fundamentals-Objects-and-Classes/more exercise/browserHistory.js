function history(browser, commands) {
    commands.forEach(commandLine => {
        if (commandLine == "Clear History and Cache") {
            browser['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser['Browser Logs'] = [];
        }
        let command = commandLine.split(' ')[0];
        let item = commandLine.split(' ')[1];
        if (command == 'Open') {
            browser['Open Tabs'].push(item);
            browser['Browser Logs'].push(commandLine);
        }
        if (command == 'Close') {
            if (browser['Open Tabs'].includes(item)) {
                let index = (browser['Open Tabs']).indexOf(item);
                let closedItem = browser['Open Tabs'][index];
                browser['Open Tabs'].splice(index, 1);
                browser['Recently Closed'].push(closedItem);
                browser['Browser Logs'].push(commandLine);
            }
        }
    });
    let entriesArr = Object.entries(browser);
    for (let i = 0; i < entriesArr.length; i++) {
        let [key, value] = entriesArr[i];
        if (i === 0) {
            console.log(`${value}`);
        } else {
            console.log(`${key}: ${value.join(', ')}`);
        }
    }
}
history({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"]

)