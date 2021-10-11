
const views = ['home_info', 'devices_info', 'prices_info']
const hr_selected = ['hr_home', 'hr_devices', 'hr_prices']

function getDevices(id, hr_selection) {
    for(view of views) {
        if(view === id) {
            document.getElementById(id).style.display = 'flex'
        } else {
            document.getElementById(view).style.display = 'none'
        }
    }

    for(hr of hr_selected) {
        if(hr === hr_selection) {
            document.getElementById(hr_selection).style.display = 'block'
        } else {
            document.getElementById(hr).style.display = 'none'
        }
    }
}