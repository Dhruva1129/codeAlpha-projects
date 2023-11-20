const issuesContainer = document.getElementById('issues-container');
const createIssueModal = document.getElementById('create-issue-modal');
const updateIssueModal = document.getElementById('update-issue-modal');

const issues = [
    { id: 1, title: 'Bug in Login Page', description: 'Cannot login to the system.', priority: 'high' },
    { id: 2, title: 'Feature Request: Dark Mode', description: 'Add dark mode for better user experience.', priority: 'medium' },
];

function displayIssues() {
    issuesContainer.innerHTML = '';
    issues.forEach(issue => {
        const issueElement = document.createElement('div');
        issueElement.classList.add('issue');
        issueElement.innerHTML = `
            <h3>${issue.title}</h3>
            <p>${issue.description}</p>
            <p class="priority-${issue.priority}">Priority: ${issue.priority}</p>
            <button onclick="openUpdateIssueModal(${issue.id})">Update Issue</button>
            <button onclick="removeIssue(${issue.id})">Remove Issue</button>
        `;
        issuesContainer.appendChild(issueElement);
    });
}

function removeIssue(issueId) {
    const index = issues.findIndex(issue => issue.id === issueId);
    
    if (index !== -1) {
        issues.splice(index, 1);
        displayIssues();
    } else {
        alert('Issue not found for removal.');
    }
}


function openCreateIssueModal() {
    createIssueModal.style.display = 'block';
}

function closeCreateIssueModal() {
    createIssueModal.style.display = 'none';
}

function createIssue() {
    const title = document.getElementById('create-title').value;
    const description = document.getElementById('create-description').value;
    const priority = document.getElementById('create-priority').value;
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    issues.push({ id: issues.length + 1, title, description, priority, file });

    displayIssues();

    closeCreateIssueModal();
}

function openUpdateIssueModal(issueId) {
    const issueToUpdate = issues.find(issue => issue.id === issueId);

    if (issueToUpdate) {
        document.getElementById('update-title').value = issueToUpdate.title;
        document.getElementById('update-description').value = issueToUpdate.description;
        document.getElementById('update-priority').value = issueToUpdate.priority;

        updateIssueModal.style.display = 'block';
    } else {
        alert('Issue not found for updating.');
    }
}

function closeUpdateIssueModal() {
    updateIssueModal.style.display = 'none';
}

function updateIssue() {
    displayIssues();

    closeUpdateIssueModal();
}

displayIssues();
