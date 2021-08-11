function sysReg(input) {
    let systems = [];
    for (let el of input) {
        let [systemName, componentName, subcomponentName] = el.split(' | ');
        let system = {};
        system.systemName = systemName;
        //if the system name is not in the list of systems
        if (systems.filter(e => e.systemName === systemName).length == 0) {
            //create the components array inside the system
            system.components = [];
            //create a component object
            let component = {
                componentName,
                subcomponents: [],
            }
            //and add the subcomponent to the component
            component.subcomponents.push(subcomponentName);
            //add the component to the system
            system.components.push(component);
            //add the system to the array of systems
            systems.push(system);
        } else {
            //if the system is already in the list, see if it has the given component:
            if (system.components.filter(e => e.componentName === componentName).length > 0) {
                //add the provided subcomponent
                for (let i = 0; i < system.components.length; i++){
                    if (system.components[i].componentName == componentName){
                        system.components[i].subcomponents.push(subcomponentName);
                    }
                }
            } else {
                //if the given component does not exist, create the component
                component = {
                    componentName,
                    subcomponents: []
                }
                //and add the subcomponent
                component.subcomponents.push(subcomponentName);
                //add the component to the system
                system.components.push(component);
            }
        }
    }

    for (let system of systems) {
        console.log(`${system.systemName}`)
        for (let component of system.components) {
            console.log(`| ${component.componentName}`);
            // console.log(system.components.subcomponents.join(', '))
        }
    }
}
// for (let system of systems){
//     if 

sysReg([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])