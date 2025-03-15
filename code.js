// import { data } from './data_test.js'
const partA = '11BQD7X7Q0ux';
const partB = '3rAX6OC3Ji_2euHRg3KrnHp';
const partC = 'QY7OXTz9cWzBQvJBuQ0Efls';
const partD = 'RO1CIweuQ7SRGQBDCBApSXg1';


FamilyTree.templates.base.defs =
    `
        <g id="base_node_menu" style="cursor:pointer;">
            <rect x="0" y="0" fill="transparent" width="22" height="22"></rect>
            <circle cx="4" cy="11" r="2" fill="#b1b9be"></circle>
            <circle cx="11" cy="11" r="2" fill="#b1b9be"></circle>
            <circle cx="18" cy="11" r="2" fill="#b1b9be"></circle>
        </g>
        <g style="cursor: pointer;" id="base_tree_menu">
            <rect x="0" y="0" width="25" height="25" fill="transparent"></rect>
            ${FamilyTree.icon.addUser(25, 25, '#fff', 0, 0)}
        </g>
        <g style="cursor: pointer;" id="base_tree_menu_close">
            <circle cx="12.5" cy="12.5" r="12" fill="#F57C00"></circle>
            ${FamilyTree.icon.close(25, 25, '#fff', 0, 0)}
        </g>            
        <g id="base_up">
            <circle cx="115" cy="30" r="15" fill="#fff" stroke="#b1b9be" stroke-width="1"></circle>
            ${FamilyTree.icon.ft(20, 80, '#b1b9be', 105, -10)}
        </g>
        <clipPath id="base_img_0">
        <circle id="base_img_0_stroke" style="fill: transparent;" cx="45" cy="62" r="35"/>
        </clipPath>
        <clipPath id="base_img_1">
        <circle id="base_img_1_stroke" cx="100" cy="62" r="35"/>
        </clipPath>
    `;

FamilyTree.templates.main = Object.assign({}, FamilyTree.templates.base);
FamilyTree.templates.main.defs = `<style>
                                        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{
                                            background-color: #aeaeae;
                                        }
                                        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{
                                            background-color: #6bb4df;
                                        }        
                                        .{randId}.male div.bft-img-button:hover{
                                            background-color: #cb4aaf;
                                        }
                                        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{
                                            background-color: #cb4aaf;
                                        }        
                                        .{randId}.female div.bft-img-button:hover{
                                            background-color: #6bb4df;
                                        }
    </style>`;
FamilyTree.templates.main.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="3" stroke="#ccc" rx="5" ry="5"></rect>' +
    '<rect x="0" y="0" height="20" width="{w}" fill="#b1b9be" stroke-width="1" stroke="#b1b9be" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="#b1b9be"></line>';

FamilyTree.templates.main.field_0 =
    '<text ' + FamilyTree.attr.width + ' ="250" style="font-size: 14px;" font-variant="all-small-caps" fill="white" x="125" y="16" text-anchor="middle">{val}</text>';
FamilyTree.templates.main.field_1 =
    '<text ' + FamilyTree.attr.width + ' ="160" data-text-overflow="multiline" style="font-size: 14px;" fill="black" x="100" y="66" text-anchor="start">{val}</text>';
FamilyTree.templates.main.field_2 =
    '<text ' + FamilyTree.attr.width + ' ="160" style="font-size: 10px;" fill="#b1b9be" x="100" y="85" text-anchor="start">{val}</text>';
FamilyTree.templates.main.field_3 =
    '<text ' + FamilyTree.attr.width + ' ="60" style="font-size: 12px;" fill="black" x="47" y="112" text-anchor="middle">{val}</text>';
FamilyTree.templates.main.img_0 =
    `<use xlink:href="#base_img_0_stroke" /> 
       <circle id="base_img_0_stroke" fill="#b1b9be" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_male = Object.assign({}, FamilyTree.templates.main);
FamilyTree.templates.main_male.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="3" stroke="#6bb4df" rx="5" ry="5"></rect>' +
    '<rect x="0" y="0" height="20" width="{w}" fill="#6bb4df" stroke-width="1" stroke="#6bb4df" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="#6bb4df"></line>';
FamilyTree.templates.main_male.img_0 =
    `<use xlink:href="#base_img_0_stroke" /> 
       <circle id="base_img_0_stroke" fill="#6bb4df" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_male_child = Object.assign({}, FamilyTree.templates.main_male);
FamilyTree.templates.main_male_child.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

FamilyTree.templates.main_female = Object.assign({}, FamilyTree.templates.main_male);
FamilyTree.templates.main_female.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="3" stroke="#cb4aaf" rx="5" ry="5"></rect>' +
    '<rect x="0" y="0" height="20" width="{w}" fill="#cb4aaf" stroke-width="1" stroke="#cb4aaf" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="#cb4aaf"></line>';
FamilyTree.templates.main_female.img_0 =
    `<use xlink:href="#base_img_0_stroke" /> 
       <circle id="base_img_0_stroke" fill="#cb4aaf" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_female_child = Object.assign({}, FamilyTree.templates.main_female);
FamilyTree.templates.main_female_child.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

FamilyTree.templates.single = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.single.size = [200, 200];
FamilyTree.templates.single.defs = `<style>
                                        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{
                                            background-color: #aeaeae;
                                        }
                                        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{
                                            background-color: #6bb4df;
                                        }        
                                        .{randId}.male div.bft-img-button:hover{
                                            background-color: #cb4aaf;
                                        }
                                        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{
                                            background-color: #cb4aaf;
                                        }        
                                        .{randId}.female div.bft-img-button:hover{
                                            background-color: #6bb4df;
                                        }
    </style>`;
FamilyTree.templates.single.node =
    '<circle cx="100" cy="100" r="100" fill="white" stroke-width="1" stroke="#aeaeae"></circle>';
FamilyTree.templates.single.field_0 = '<text ' + FamilyTree.attr.width + ' ="160" style="font-size: 14px;" font-variant="all-small-caps"  font-weight="bold" fill="black" x="100" y="115" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.field_1 = '<text ' + FamilyTree.attr.width + ' ="190" data-text-overflow="multiline" style="font-size: 16px;" fill="black" x="100" y="135" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.field_3 =
    '<text ' + FamilyTree.attr.width + ' ="60" style="font-size: 12px;" fill="black" x="100" y="180" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.nodeMenuButton = `<use ${FamilyTree.attr.control_node_menu_id}="{id}" x="89" y="5" xlink:href="#base_node_menu" />`;
FamilyTree.templates.single_male = Object.assign({}, FamilyTree.templates.single);
FamilyTree.templates.single_male.node = '<circle cx="100" cy="100" r="100" fill="white" stroke-width="3" stroke="#6bb4df" ></circle>';
FamilyTree.templates.single_male.img_0 =
    `<use xlink:href="#base_img_1_stroke"/> 
       <circle id="base_img_1_stroke" fill="#6bb4df" cx="100" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_1)" xlink:href="{val}" x="65" y="26" width="72" height="72"></image>`;
FamilyTree.templates.single_female = Object.assign({}, FamilyTree.templates.single_male);
FamilyTree.templates.single_female.node = '<circle cx="100" cy="100" r="100" fill="white" stroke-width="3" stroke="#cb4aaf" ></circle>';
FamilyTree.templates.single_female.img_0 =
    `<use xlink:href="#base_img_1_stroke"/> 
       <circle id="base_img_1_stroke" fill="#cb4aaf" cx="100" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_1)" xlink:href="{val}" x="65" y="26" width="72" height="72"></image>`;

FamilyTree.templates.family_single_male = Object.assign({}, FamilyTree.templates.single_male);
FamilyTree.templates.family_single_male.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';
FamilyTree.templates.family_single_female = Object.assign({}, FamilyTree.templates.single_female);
FamilyTree.templates.family_single_female.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

// Custom Pointer
FamilyTree.templates.main.pointer =
    `<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">'
    + '<polygon fill="rgb(255, 202, 40)" points="53.004,173.004 53.004,66.996 0,120" />'
    + '<polygon fill="rgb(255, 202, 40)" points="186.996,66.996 186.996,173.004 240,120" />'
    + '<polygon fill="rgb(255, 202, 40)" points="66.996,53.004 173.004,53.004 120,0" />'
    + '<polygon fill="rgb(255, 202, 40)" points="120,240 173.004,186.996 66.996,186.996" />'
    + '<circle fill="rgb(255, 202, 40)" cx="120" cy="120" r="30" />'
    + '</g></g>`;

// Custom Functionality
FamilyTree.elements.textarea = function (e, t, i, r) {
    var a = FamilyTree.elements._vidrf(e, t, r);
    if (a.doNotRender)
        return {
            html: ""
        };
    var n = "";
    return t.btn && (n = `<a href="#" data-input-btn="" class="bft-link bft-link-bft-button">${t.btn}</a>`),
    {
        html: `<div class="bft-form-field" style="min-width: ${i};">\n
                <div class="bft-input" ${a.disabledAttribute} ${a.vlidators}>\n
                <label for="${a.id}" class="hasval">${FamilyTree._escapeGreaterLessSign(a.label)}</label>\n\n
                <textarea ${a.readOnlyAttribute} data-binding="${FamilyTree._escapeDoubleQuotes(a.binding)}" id="${a.id}" name="${a.id}" autocomplete="off">${FamilyTree._escapeDoubleQuotes(a.value)}</textarea>\n
                ${n}\n
                </div>\n
                </div>`,
        id: a.id,
        value: a.value
    }
}

FamilyTree.prototype.exportJSON = function (e) {
    var t = FamilyTree._defaultExportProfileOptionsForCSV_SVG_JSON(e, "json")
        , i = this.getNode(t.nodeId)
        , r = null;
    i ? (r = [],
        FamilyTree._exportIterateForJSON_XML_CSV(this, i, t, r)) : !1 === t.min || !1 === t.expandChildren ? FamilyTree._exportIterateForJSON_XML_CSV(this, this.roots, t, r) : r = JSON.parse(JSON.stringify(this.config.nodes));
    return r;
}

var family = new FamilyTree(document.getElementById("tree"), {
    keyNavigation: { focusId: '_8e8e' },
    template: "main",
    scaleInitial: FamilyTree.match.boundary,
    //nodeTreeMenu: true,
    miniMap: true,
    nodeMenu: {
        showTreeMenu: {
            icon: FamilyTree.icon.addUser(30, 30, '#aeaeae'),
            text: "Add Person",
            color: "white",
            onClick: function (nodeId) {
                family.showTreeMenu(nodeId);
            }
        },
        remove: { text: "Delete Person" }
    },
    nodeBinding: {
        field_0: "Relationship",
        field_1: "name",
        field_2: "bdate",
        //field_3: "id",
        img_0: "photo",
    },
    editForm: {
        titleBinding: "name",
        photoBinding: "photo",
        generateElementsFromFields: false,
        addMore: 'Add more elements',
        addMoreBtn: 'Add element',
        addMoreFieldName: 'Element name',
        elements: [
            {
                type: 'textbox', label: 'Full Name', binding: 'name',
                vlidators: { required: 'Is required' }
            },
            [
                { type: 'textbox', label: 'Phone', binding: 'mobile' },
                { type: 'textbox', label: 'Email', binding: 'email' }
            ],
            [
                { type: 'date', label: 'Birth Date', binding: 'bdate' },
                {
                    type: 'select', label: 'Gender', binding: 'gender',
                    options: [
                        { value: 'male', text: 'Male' },
                        { value: 'female', text: 'Female' },
                        { value: '', text: 'Other' }
                    ]
                }
            ],
            { type: 'textbox', label: 'Address 1', binding: 'address1' },
            { type: 'textbox', label: 'Address 2', binding: 'address2' },
            [
                { type: 'textbox', label: 'City', binding: 'city' },
                { type: 'textbox', label: 'State', binding: 'state' }
            ],
            [
                { type: 'textbox', label: 'ZIP', binding: 'zipcode' },
                { type: 'textbox', label: 'Country', binding: 'country' }, //options: [{ value: 'bg', text: 'Bulgaria' }, { value: 'ru', text: 'Russia' }, { value: 'gr', text: 'Greece' }], label: 'Country', binding: 'country' }
            ],
            { type: 'textbox', label: 'Relationship', binding: 'Relationship' },
            [
                { type: 'textbox', label: 'Photo Url', binding: 'photo', btn: 'Upload' },
                { type: 'textbox', label: 'Dotted Line to', binding: 'divorced' }
            ],
            [
                { type: 'textbox', label: 'ID', binding: 'id' },
                { type: 'textbox', label: 'Order ID', binding: 'orderId' }
            ],
            [
                { type: 'textbox', label: 'Father ID', binding: 'fid' },
                { type: 'textbox', label: 'Mother ID', binding: 'mid' }
            ],
            { type: 'textarea', label: 'Notes', binding: 'notes' }
        ],
        buttons: {
            edit: {
                icon: FamilyTree.icon.edit(24, 24, '#fff'),
                text: 'Edit',
                hideIfEditMode: true,
                hideIfDetailsMode: false
            },
            share: {
                icon: FamilyTree.icon.share(24, 24, '#fff'),
                text: 'Share'
            },
            pdf: {
                icon: FamilyTree.icon.pdf(24, 24, '#fff'),
                text: 'Save as PDF'
            },
            remove: {
                icon: FamilyTree.icon.remove(24, 24, '#fff'),
                text: 'Remove',
                hideIfDetailsMode: true
            }
        }
    },
    orderBy: "orderId",
    filterBy: ['Relationship'], // FILTER FUNCTION TO BE ADDED
    tags: {
        "single_male": {
            template: "single_male"
        },
        "single_female": {
            template: "single_female"
        },
        "main_female_child": {
            template: "main_female_child"
        },
        "main_male_child": {
            template: "main_male_child"
        },
        "family_single_female": {
            template: "family_single_female"
        },
        "family_single_male": {
            template: "family_single_male"
        },
        filter: {
            template: 'dot'
        }
    }
});

/*
family.on('render-link', function (sender, args) {
    if (args.cnode.ppid != undefined) {
        args.html += '<use xlink:href="#heart" x="' + args.p.xa + '" y="' + args.p.ya + '"/>';
    }
});
*/

// UPDATING NODE TYPE (Shape)
var globalNodeMap = {};

function syncGlobalMapForNodes() {
    family.config.nodes.forEach(function (node) {
        if (!globalNodeMap[node.id]) {
            // Combine mid and fid into one array.
            var parents = [];
            if (node.mid && node.mid.trim() !== "") {
                parents.push(node.mid);
            }
            if (node.fid && node.fid.trim() !== "") {
                parents.push(node.fid);
            }
            globalNodeMap[node.id] = {
                pids: node.pids || [],  // partners (a list)
                parents: parents,       // combined parents (strings)
                childIds: [],           // will be re-populated below
                gender: node.gender || ''
            };
        }
    });

    // Second pass: Clear all childIds and recalc them by scanning each node’s parents.
    for (var nodeId in globalNodeMap) {
        if (globalNodeMap.hasOwnProperty(nodeId)) {
            globalNodeMap[nodeId].childIds = [];
        }
    }

    // Loop over all nodes and add this node’s id to each of its parent's childIds.
    family.config.nodes.forEach(function (node) {
        var parents = [];
        if (node.mid && node.mid.trim() !== "") {
            parents.push(node.mid);
        }
        if (node.fid && node.fid.trim() !== "") {
            parents.push(node.fid);
        }
        parents.forEach(function (parentId) {
            if (globalNodeMap[parentId]) {
                if (!globalNodeMap[parentId].childIds.includes(node.id)) {
                    globalNodeMap[parentId].childIds.push(node.id);
                }
            }
        });
    });
}

function removeFromGlobalMap(node) {
    if (globalNodeMap) {
        // For every entry in the global map, remove any occurrence of node.id.
        Object.keys(globalNodeMap).forEach(function (key) {
            var entry = globalNodeMap[key];
            // Remove from parents (if any)
            if (entry.parents) {
                entry.parents = entry.parents.filter(function (id) {
                    return id !== node.id;
                });
            }
            // Remove from pids (partners) since pids is a list.
            if (entry.pids) {
                entry.pids = entry.pids.filter(function (id) {
                    return id !== node.id;
                });
            }
            // Remove from childIds.
            if (entry.childIds) {
                entry.childIds = entry.childIds.filter(function (id) {
                    return id !== node.id;
                });
            }
        });
        // Finally, remove the removed node's own entry from the global map.
        delete globalNodeMap[node.id];
    }
}

function updateTagForNode(node) {
    var mapping = globalNodeMap[node.id];
    // var node = family.get(node.id);
    if (!mapping) return;

    if (mapping.childIds && mapping.childIds.length > 0) {
        node.tags = [];
    } else {
        if (mapping.gender === 'male') {
            node.tags = ['single_male'];
        } else if (mapping.gender === 'female') {
            node.tags = ['single_female'];
        } else {
            node.tags = [];
        }
    }
}

family.on("updated", function (sender, args) {
    syncGlobalMapForNodes();
    // console.log("Global node map after sync:", globalNodeMap);

    // Process added nodes
    var addedNodes = args.addNodesData || [];
    addedNodes.forEach(function (newNode) {
        // newNode should now exist in globalNodeMap from our sync.
        var nodeData = family.get(newNode.id);
        updateTagForNode(nodeData);
        family.updateNode(nodeData, function () {
            console.log("Added node updated with tag:", nodeData);
        });
    });

    // Process updated nodes
    var updatedNodes = args.updateNodesData || [];
    updatedNodes.forEach(function (updNode) {
        var nodeData = family.get(updNode.id);
        updateTagForNode(nodeData);
        family.updateNode(nodeData, function () {
            console.log("Updated node updated with tag:", nodeData);
        });
    });

    // Process removed node (if provided)
    if (args.removeNodeId) {
        var removedNode = { id: args.removeNodeId };
        removeFromGlobalMap(removedNode);
        console.log("Removed node updated in global map for:", args.removeNodeId);
    }
});

family.on('field', function (sender, args) {
    if (args.name == "bdate") {
        if (args.data["ddate"]) {
            var bdate = new Date(args.data["bdate"]).getFullYear().toString();
            var ddate = new Date(args.data["ddate"]).getFullYear().toString();
            args.value = bdate + " - " + ddate;
        }
        else args.value = "";
    }
});

family.on('render-link', function (sender, args) {
    var cnodeData = family.get(args.cnode.id);
    var nodeData = family.get(args.node.id);

    if (cnodeData.divorced != undefined && nodeData.divorced != undefined &&
        cnodeData.divorced.includes(args.node.id) && nodeData.divorced.includes(args.cnode.id)) {
        // console.log(args.html);
        args.html = args.html.replace("path", "path stroke-dasharray='3, 2'");
    }
});

/*
// Update Relationship Format
family.editUI.on('save', function (sender, args) {
    const nodeData = args.data;

    if (nodeData.Relationship) {
        nodeData.Relationship = nodeData.Relationship
            .split(',')
            .map(item => item.trim())
            .filter(item => item !== '');
    }
});
*/

family.on('updated', function (sender, args) {
    document.getElementById('save').classList.remove('disabled');
});

family.on('added', function (sender, args) {
    document.getElementById('save').classList.remove('disabled');
});

family.on('removed', function (sender, args) {
    document.getElementById('save').classList.remove('disabled');
});

/* ===================
    FILE SAVING
=================== */
const GITHUB_TOKEN = 'github_pat_' + partA + partB + partC + partD;
const GITHUB_OWNER = "private-8-tyken";        // e.g. "octocat"
const GITHUB_REPO = "fam";// e.g. "test-familytree"
const GITHUB_PATH = "data.json";  // path in your repo
const GITHUB_BRANCH = "main";           // branch name

const saveBtn = document.getElementById('save');
let currentFileSha;
const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_PATH}`;

(async function loadData() {
    try {
        const resp = await fetch(
            `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_PATH}?ref=${GITHUB_BRANCH}`, {
            headers: {
                "Authorization": `token ${GITHUB_TOKEN}`,
                "Accept": "application/vnd.github.v3.raw"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();  // Use .json() if expecting JSON
            })
            .catch(error => {
                console.error("Error fetching file:", error);
            });

        const data = JSON.parse(resp);
        // console.log(data);

        family.load(data);
        console.log("Hello Family!");
        syncGlobalMapForNodes();
    } catch (err) {
        console.error("Error loading CSV from GitHub:", err);
    }
})();

function csvToJson(csvString) {
    const lines = csvString.trim().split("\n");
    const headers = lines[0].split(",");

    return lines.slice(1).map(line => {
        const values = line.split(",");
        return headers.reduce((acc, header, index) => {
            acc[header] = values[index];
            return acc;
        }, {});
    });
}

// 4) On “Save,” PUT the updated CSV to GitHub.
saveBtn.addEventListener('click', async () => {
    if (saveBtn.classList.contains("disabled")) return;

    try {
        var exportData = family.exportJSON();
        console.log("Export", exportData);
        const jsonString = JSON.stringify(exportData, null, 2);
        const base64Contents = utf8ToBase64(jsonString);

        //console.log(jsonString);
        updateFile(base64Contents);
    } catch (error) {
        console.error("Error saving CSV to GitHub:", error);
    }
});

async function updateFile(contents) {
    let sha = currentFileSha;
    if (!sha) {
        const getResp = await fetch(`${url}`, {
            headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}` }
        });
        if (getResp.ok) {
            const fileData = await getResp.json();
            sha = fileData.sha;
        }
    }

    console.log("Using SHA:", sha);

    // Construct the request body.
    // If sha is undefined (i.e. file doesn't exist), omit it.
    const body = {
        message: 'Update data.json',
        content: contents,
        branch: GITHUB_BRANCH,
        ...(sha && { sha })
    };

    // PUT the updated file
    const putResp = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (!putResp.ok) {
        throw new Error(`Update failed: ${await putResp.text()}`);
    } else {
        saveBtn.classList.add('disabled');
    }

    const result = await putResp.json();
    console.log('File updated successfully:', result);

    // Save the new SHA for future updates.
    currentFileSha = result.content.sha;
}

function utf8ToBase64(str) {
    return btoa(
        encodeURIComponent(str)
            .replace(/%([0-9A-F]{2})/g, (_, p1) =>
                String.fromCharCode('0x' + p1)
            )
    );
}



