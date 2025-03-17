const FeaturesBtn = document.querySelector('.FeaturesBtn')
const Featureslist = document.querySelector('.Featurelist')
const FeaturesDownImg = document.querySelector('.FeaturesBtn > img')

const CompanysBtn = document.querySelector('.CompanyBtn')
const Companylist = document.querySelector('.Companylist')
const CompanyDownImg = document.querySelector('.CompanyBtn > img')

const LMBtn = document.querySelector('.LMBtn')
const ResiBtn = document.querySelector('.RegisterBtn')
const MResiBtn = document.querySelector('.MRegisterBtn')
const Alert = document.querySelector('.alert')

function closeDropdowns () {
    Featureslist.style.visibility = 'hidden';
    FeaturesDownImg.src = 'images/icon-arrow-down.svg';

    Companylist.style.visibility = 'hidden';
    CompanyDownImg.src = 'images/icon-arrow-down.svg';
}



FeaturesBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeDropdowns();

    if(Featureslist.style.visibility === 'visible') {
        Featureslist.style.visibility = 'hidden';
        FeaturesDownImg.src = 'images/icon-arrow-down.svg'
    } else {
        Featureslist.style.visibility = 'visible';
        FeaturesDownImg.src = 'images/icon-arrow-up.svg'
    }
});


CompanysBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeDropdowns();

    if(Companylist.style.visibility === 'visible') {
        Companylist.style.visibility = 'hidden';
        CompanyDownImg.src = 'images/icon-arrow-down.svg'
    } else {
        Companylist.style.visibility = 'visible';
        CompanyDownImg.src = 'images/icon-arrow-up.svg'
    }
});

document.addEventListener('click', () => {
    closeDropdowns();
})

// 로그인 및 회원가입 버튼 클릭 시 알림 표시
function showAlert() {
    Alert.style.display = 'block';
    Alert.style.opacity = '0.8'
    setTimeout(() => {
        Alert.style.opacity = '0'
    }, 0);
    setTimeout(() => {
        Alert.style.display = 'none';
    }, 3000);
    // Alert.style.opacity = '0.8'
    // let fadeOut = setInterval(() => {
    //     if (Alert.style.opacity > 0) {
    //         Alert.style.display = 'block';
    //         Alert.style.opacity -= 0.05;
    //     } else {
    //         clearInterval(fadeOut);
    //         Alert.style.display = 'none';
    //     }
    // }, 50);
}

LMBtn.addEventListener('click', showAlert);
ResiBtn.addEventListener('click', showAlert);
MResiBtn.addEventListener('click', showAlert);


// LMBtn.addEventListener('click', () => {
//     Alert.style.visibility = 'visible';
//     setTimeout(function() {
//         Alert.style.visibility = 'hidden';
//     }, 3000)
// });

// ResiBtn.addEventListener('click', () => {
//     Alert.style.visibility = 'visible';
//     setTimeout(function() {
//         Alert.style.visibility = 'hidden';
//     }, 3000)
// });

//mobile JS

const SideBar = document.querySelector('.sidebar')
const OpenMenu = document.querySelector('.m-menu')
const Menuimage = document.querySelector('.m-menu > img')

// OpenMenu.addEventListener('click', () => {
//     if (SideBar.style.visibility === 'hidden') {
//         SideBar.style.visibility = 'visible'
//         Menuimage.src = 'images/icon-close-menu.svg'
//         body.style.backgroundColor = 'gray';
//     } else {
//         SideBar.style.visibility = 'hidden'
//         Menuimage.src = 'images/icon-menu.svg'
//         body.style.backgroundColor = 'var(--AlmostWhite)';
//     }
// })


// 모바일 사이드바 토글 함수
function toggleSidebar() {
    const isHidden = SideBar.style.visibility !== 'visible'; // 'hidden'이 아니라 'visible'을 기준으로 확인
    SideBar.style.visibility = isHidden ? 'visible' : 'hidden';
    Menuimage.src = isHidden ? 'images/icon-close-menu.svg' : 'images/icon-menu.svg';
    document.body.style.backgroundColor = isHidden ? 'gray' : 'var(--AlmostWhite)';
}

const CloseBtn = document.querySelector('.m-menu')

CloseBtn.addEventListener('click', () => {
    if(SideBar.style.visibility === 'visible') {
        CloseBtn.style.position = 'relative';
    } else {
        CloseBtn.style.position = 'fixed'
    }
})

// 처음 클릭 시에도 정상 동작하도록 이벤트 연결
OpenMenu.addEventListener('click', toggleSidebar);


const MFeaturesBtn = document.querySelector('.MFeatureBtn')
const MFeatureslist = document.querySelector('.MFeaturelist')
const MFeaturesDownImg = document.querySelector('.MFeatureBtn > img')

const MCompanysBtn = document.querySelector('.MCompanyBtn')
const MCompanylist = document.querySelector('.MCompanylist')
const MCompanyDownImg = document.querySelector('.MCompanyBtn > img')




MFeaturesBtn.addEventListener('click', () => {
    if(MFeatureslist.style.display === 'block') {
        MFeatureslist.style.display = 'none';
        MFeaturesDownImg.src = 'images/icon-arrow-down.svg'
    } else {
        MFeatureslist.style.display = 'block';
        MFeaturesDownImg.src = 'images/icon-arrow-up.svg';
    }
})

MCompanysBtn.addEventListener('click', () => {
    if(MCompanylist.style.display === 'block') {
        MCompanylist.style.display = 'none';
        MCompanyDownImg.src = 'images/icon-arrow-down.svg';
    } else {

        MCompanylist.style.display = 'block';
        MCompanyDownImg.src = 'images/icon-arrow-up.svg'
    }
})