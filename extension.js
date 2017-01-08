
const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Mainloop = imports.mainloop;

let beats, label;

function _internet_time()
{
  let dt = new Date();
  return Math.floor((((dt.getUTCHours() + 1) % 24) + dt.getUTCMinutes() / 60 + dt.getUTCSeconds() / 3600) * 1000 / 24);
}

function init() {

    label = new St.Bin({ style_class: 'panel-label'});
    label.set_child( new St.Label({ text: "@" + _internet_time() }) );

    Mainloop.timeout_add(60000, function () {
       label.set_child( new St.Label({ text: "@" + _internet_time() }) );
       return true
    });
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(label, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(label);
}
