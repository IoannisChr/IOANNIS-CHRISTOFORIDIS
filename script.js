function showContent(contentId) {

    document.querySelectorAll('#sideMenu > div').forEach(subMenu => {
        subMenu.classList.add('hidden');
    });

    document.getElementById(contentId + "SubMenu").classList.remove('hidden');

    const mainContent = document.getElementById('mainContent');
    switch (contentId) {
        case 'bio':
            mainContent.textContent = 'Bio Content';
            break;
        case 'photos':
            mainContent.textContent = 'Photos Content';
            break;
        case 'discography':
            mainContent.textContent = 'Discography Content';
            break;
        case 'links':
            mainContent.textContent = 'Links Content';
            break;
        case 'management':
            mainContent.textContent = 'Management Content';
            break;
        default:
            mainContent.textContent = 'Main';
    }
}

function showSubContent(subContentId, numberOfPhotos) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';
    if (numberOfPhotos > 0) {
        const slotCount = numberOfPhotos <= 3 ? numberOfPhotos : numberOfPhotos === 4 ? 5 : 5;
        for (let i = 0; i < slotCount; i++) {
            // path gia photos
            mainContent.innerHTML += `<div class="photo-slot"><img src="${subContentId}_${i + 1}.jpg" alt="${subContentId} Photo ${i + 1}"></div>`;
        }
    } else {
        mainContent.textContent = 'No content available for ' + subContentId;
    }
}
