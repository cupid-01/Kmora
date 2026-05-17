/* ========================================
   Kmora v2.0 - 多语言 + 图片压缩 + 原图下载
   ======================================== */

// ===== 多语言字典 =====
const I18N = {
    zh: {
        appName: 'Kmora', appSlogan: '数字记忆时光库',
        galleryTitle: '记忆画廊', gallerySubtitle: '和我们一起分享美好瞬间',
        emptyTitle: '还没有照片', emptyDesc: '点击右下角按钮上传第一张照片',
        statPosts: '发布', statLikes: '获赞', myPosts: '我的发布',
        loginTitle: '欢迎回来', loginSubtitle: '登录以分享你的记忆',
        phone: '手机号', phonePlaceholder: '请输入手机号',
        password: '密码', passwordPlaceholder: '至少6位',
        loginBtn: '登录', noAccount: '还没有账号？立即注册',
        cancel: '取消', registerTitle: '创建账号',
        registerSubtitle: '开启你的记忆之旅', sendCode: '获取验证码',
        verifyCode: '验证码', codePlaceholder: '6位验证码',
        nickname: '昵称', nicknamePlaceholder: '你的名字',
        registerBtn: '注册', hasAccount: '已有账号？去登录',
        uploadTitle: '发布记忆', uploadSubtitle: '上传照片或视频',
        uploadClick: '点击选择文件', uploadFormats: '支持 JPG、PNG、GIF、MP4',
        uploadMax: '最大 10MB', changeFile: '更换',
        compressInfo: '图片将被智能压缩以节省空间，原图仍可通过下载获取',
        titleLabel: '标题', titlePlaceholder: '给这张照片起个名字',
        descLabel: '描述', descPlaceholder: '分享这个故事...',
        locationLabel: '地点', locationPlaceholder: '例如：上海',
        publishBtn: '发布', viewDetails: '查看详情', viewPhoto: '查看照片',
        downloadOriginal: '下载原图', delete: '删除', comments: '评论',
        commentPlaceholder: '写下你的评论...', settingsTitle: '设置',
        apiUrl: 'API 地址', storageMode: '存储模式', local: '本地', cloud: '云端',
        theme: '主题', light: '浅色', dark: '深色', save: '保存',
        exportData: '导出数据', close: '关闭', logout: '退出登录',
        confirmDelete: '确认删除', deleteWarning: '此操作不可撤销，确定要删除这条记忆吗？',
        compressing: '正在压缩...', loginSuccess: '登录成功！',
        registerSuccess: '注册成功！', codeSent: '验证码已发送',
        publishSuccess: '发布成功！', likeSuccess: '点赞成功！',
        unlikeSuccess: '已取消点赞', commentSuccess: '评论成功！',
        deleted: '已删除', settingsSaved: '设置已保存',
        emailUpdated: '邮箱已更新',
        invalidEmail: '请输入有效的邮箱地址',
        emailExists: '该邮箱已被使用',
        enterEmail: '请输入邮箱地址',
        currentEmail: '当前邮箱',
        newEmail: '新邮箱',
        newEmailPlaceholder: '输入新邮箱地址',
        confirmPassword: '确认密码',
        updateEmail: '更新邮箱',
        background: '背景样式',
        bgDefault: '默认',
        bgWarm: '暖色',
        bgCool: '冷色',
        bgNature: '自然',
        bgElegant: '优雅',
        bgDark: '深色',
        accentColor: '主题颜色',
        dataExported: '数据已导出', logoutConfirm: '确定要退出登录吗？',
        loggedOut: '已退出登录', needLogin: '请先登录',
        enterComment: '请输入评论内容', selectFile: '请先选择文件',
        fileTooBig: '文件不能超过10MB', wrongPassword: '密码错误',
        userNotFound: '用户不存在，请先注册', phoneExists: '该手机号已注册',
        wrongCode: '验证码错误或已过期', invalidPhone: '请输入正确的手机号',
        originalSize: '原图大小', compressedSize: '压缩后',
    },
    en: {
        appName: 'Kmora', appSlogan: 'Digital Memory Archive',
        galleryTitle: 'Memory Gallery', gallerySubtitle: 'Share beautiful moments with us',
        emptyTitle: 'No photos yet', emptyDesc: 'Tap the button to upload your first photo',
        statPosts: 'Posts', statLikes: 'Likes', myPosts: 'My Posts',
        loginTitle: 'Welcome Back', loginSubtitle: 'Login to share your memories',
        phone: 'Phone', phonePlaceholder: 'Enter phone number',
        password: 'Password', passwordPlaceholder: 'At least 6 characters',
        loginBtn: 'Login', noAccount: "Don't have an account? Register",
        cancel: 'Cancel', registerTitle: 'Create Account',
        registerSubtitle: 'Start your memory journey', sendCode: 'Get Code',
        verifyCode: 'Code', codePlaceholder: '6-digit code',
        nickname: 'Nickname', nicknamePlaceholder: 'Your name',
        registerBtn: 'Register', hasAccount: 'Already have an account? Login',
        uploadTitle: 'Publish Memory', uploadSubtitle: 'Upload photo or video',
        uploadClick: 'Tap to select file', uploadFormats: 'Supports JPG, PNG, GIF, MP4',
        uploadMax: 'Max 10MB', changeFile: 'Change',
        compressInfo: 'Images will be compressed to save space. Original quality available via download.',
        titleLabel: 'Title', titlePlaceholder: 'Name this photo',
        descLabel: 'Description', descPlaceholder: 'Share the story...',
        locationLabel: 'Location', locationPlaceholder: 'e.g. Shanghai',
        publishBtn: 'Publish', viewDetails: 'View Details', viewPhoto: 'View Photo',
        downloadOriginal: 'Download Original', delete: 'Delete', comments: 'Comments',
        commentPlaceholder: 'Write a comment...', settingsTitle: 'Settings',
        apiUrl: 'API URL', storageMode: 'Storage Mode', local: 'Local', cloud: 'Cloud',
        theme: 'Theme', light: 'Light', dark: 'Dark', save: 'Save',
        exportData: 'Export Data', close: 'Close', logout: 'Logout',
        confirmDelete: 'Confirm Delete', deleteWarning: 'This cannot be undone. Delete this memory?',
        compressing: 'Compressing...', loginSuccess: 'Login successful!',
        registerSuccess: 'Registration successful!', codeSent: 'Code sent',
        publishSuccess: 'Published!', likeSuccess: 'Liked!',
        unlikeSuccess: 'Unliked', commentSuccess: 'Comment added!',
        deleted: 'Deleted', settingsSaved: 'Settings saved',
        emailUpdated: 'Email updated',
        invalidEmail: 'Please enter a valid email',
        emailExists: 'Email already in use',
        enterEmail: 'Please enter email address',
        currentEmail: 'Current Email',
        newEmail: 'New Email',
        newEmailPlaceholder: 'Enter new email',
        confirmPassword: 'Confirm Password',
        updateEmail: 'Update Email',
        background: 'Background',
        bgDefault: 'Default',
        bgWarm: 'Warm',
        bgCool: 'Cool',
        bgNature: 'Nature',
        bgElegant: 'Elegant',
        bgDark: 'Dark',
        accentColor: 'Accent Color',
        dataExported: 'Data exported', logoutConfirm: 'Logout?',
        loggedOut: 'Logged out', needLogin: 'Please login first',
        enterComment: 'Enter comment', selectFile: 'Please select a file',
        fileTooBig: 'File cannot exceed 10MB', wrongPassword: 'Wrong password',
        userNotFound: 'User not found, please register', phoneExists: 'Phone already registered',
        wrongCode: 'Invalid or expired code', invalidPhone: 'Please enter a valid phone number',
        originalSize: 'Original', compressedSize: 'Compressed',
    },
    ko: {
        appName: 'Kmora', appSlogan: '디지털 기억 보관소',
        galleryTitle: '추억 갤러리', gallerySubtitle: '함께 아름다운 순간을 공유해요',
        emptyTitle: '아직 사진이 없어요', emptyDesc: '버튼을 눌러 첫 사진을 업로드하세요',
        statPosts: '게시물', statLikes: '좋아요', myPosts: '내 게시물',
        loginTitle: '다시 오신 것을 환영합니다', loginSubtitle: '추억을 공유하려면 로그인하세요',
        phone: '전화번호', phonePlaceholder: '전화번호를 입력하세요',
        password: '비밀번호', passwordPlaceholder: '최소 6자',
        loginBtn: '로그인', noAccount: '계정이 없으신가요? 가입하기',
        cancel: '취소', registerTitle: '계정 만들기',
        registerSubtitle: '추억 여정을 시작하세요', sendCode: '인증번호 받기',
        verifyCode: '인증번호', codePlaceholder: '6자리 인증번호',
        nickname: '닉네임', nicknamePlaceholder: '이름을 입력하세요',
        registerBtn: '가입', hasAccount: '이미 계정이 있으신가요? 로그인',
        uploadTitle: '추억 게시하기', uploadSubtitle: '사진 또는 동영상 업로드',
        uploadClick: '파일 선택하기', uploadFormats: 'JPG, PNG, GIF, MP4 지원',
        uploadMax: '최대 10MB', changeFile: '변경',
        compressInfo: '저장 공간 절약을 위해 이미지가 압축됩니다. 원본은 다운로드로 받을 수 있어요.',
        titleLabel: '제목', titlePlaceholder: '사진에 이름을 지어주세요',
        descLabel: '설명', descPlaceholder: '이야기를 공유해주세요...',
        locationLabel: '위치', locationPlaceholder: '예: 서울',
        publishBtn: '게시', viewDetails: '상세 보기', viewPhoto: '사진 보기',
        downloadOriginal: '원본 다운로드', delete: '삭제', comments: '댓글',
        commentPlaceholder: '댓글을 입력하세요...', settingsTitle: '설정',
        apiUrl: 'API 주소', storageMode: '저장 모드', local: '로컬', cloud: '클라우드',
        theme: '테마', light: '밝음', dark: '어두움', save: '저장',
        exportData: '데이터 내보내기', close: '닫기', logout: '로그아웃',
        confirmDelete: '삭제 확인', deleteWarning: '이 작업은 되돌릴 수 없습니다. 이 추억을 삭제할까요?',
        compressing: '압축 중...', loginSuccess: '로그인 성공!',
        registerSuccess: '가입 성공!', codeSent: '인증번호가 발송되었습니다',
        publishSuccess: '게시되었습니다!', likeSuccess: '좋아요!',
        unlikeSuccess: '좋아요 취소', commentSuccess: '댓글이 추가되었습니다!',
        deleted: '삭제되었습니다', settingsSaved: '설정이 저장되었습니다',
        emailUpdated: '이메일이 업데이트되었습니다',
        invalidEmail: '올바른 이메일을 입력하세요',
        emailExists: '이미 사용 중인 이메일입니다',
        enterEmail: '이메일을 입력하세요',
        currentEmail: '현재 이메일',
        newEmail: '새 이메일',
        newEmailPlaceholder: '새 이메일 입력',
        confirmPassword: '비밀번호 확인',
        updateEmail: '이메일 업데이트',
        background: '배경 스타일',
        bgDefault: '기본',
        bgWarm: '따뜻한',
        bgCool: '차가운',
        bgNature: '자연',
        bgElegant: '우아한',
        bgDark: '어두운',
        accentColor: '테마 색상',
        dataExported: '데이터가 내보내졌습니다', logoutConfirm: '로그아웃하시겠습니까?',
        loggedOut: '로그아웃되었습니다', needLogin: '먼저 로그인해주세요',
        enterComment: '댓글을 입력하세요', selectFile: '파일을 선택하세요',
        fileTooBig: '파일은 10MB를 초과할 수 없습니다', wrongPassword: '비밀번호가 틀렸습니다',
        userNotFound: '사용자를 찾을 수 없습니다. 먼저 가입해주세요', phoneExists: '이미 등록된 전화번호입니다',
        wrongCode: '인증번호가 틀렸거나 만료되었습니다', invalidPhone: '올바른 전화번호를 입력하세요',
        originalSize: '원본 크기', compressedSize: '압축 후',
    }
};

// ===== 多语言管理 =====
const I18n = {
    currentLang: 'zh',
    init() {
        const saved = localStorage.getItem('kmora_lang');
        if (saved && I18N[saved]) this.currentLang = saved;
        this.apply();
    },
    setLang(lang) {
        if (!I18N[lang]) return;
        this.currentLang = lang;
        localStorage.setItem('kmora_lang', lang);
        this.apply();
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        App.renderPosts();
        if (App.currentDetailId) Detail.renderComments(App.currentDetailId);
    },
    t(key) {
        return I18N[this.currentLang]?.[key] || I18N['zh'][key] || key;
    },
    apply() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (I18N[this.currentLang][key]) el.textContent = I18N[this.currentLang][key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (I18N[this.currentLang][key]) el.placeholder = I18N[this.currentLang][key];
        });
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 
                                         this.currentLang === 'ko' ? 'ko-KR' : 'en';
    }
};

// ===== 图片压缩工具 =====
const ImageCompressor = {
    async compress(file, maxW = 1200, maxH = 1200, quality = 0.8) {
        return new Promise((resolve, reject) => {
            if (!file.type.startsWith('image/')) {
                resolve({ compressed: null, original: null, ratio: 0 });
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    let { width, height } = img;
                    if (width > maxW || height > maxH) {
                        const r = Math.min(maxW / width, maxH / height);
                        width *= r; height *= r;
                    }
                    const canvas = document.createElement('canvas');
                    canvas.width = width; canvas.height = height;
                    canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                    const compressed = canvas.toDataURL('image/jpeg', quality);
                    const origSize = this.formatSize(file.size);
                    const compSize = this.formatSize(this.dataUrlSize(compressed));
                    const ratio = Math.round((1 - this.dataUrlSize(compressed) / file.size) * 100);
                    resolve({ compressed, original: e.target.result, originalSize: origSize, compressedSize: compSize, ratio, width, height });
                };
                img.onerror = reject;
                img.src = e.target.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    },
    dataUrlSize(dataUrl) {
        return Math.round((dataUrl.length - 'data:image/jpeg;base64,'.length) * 3 / 4);
    },
    formatSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }
};

// ===== 全局状态 =====
const App = {
    currentUser: null, currentDetailId: null, storageMode: 'local',
    apiUrl: '', theme: 'light', posts: [], users: {}, comments: {}, likes: {}, 

    init() {
        this.loadData(); this.loadTheme(); I18n.init();
        this.checkLogin(); this.renderPosts(); this.setupEventListeners();
        setTimeout(() => document.getElementById('splashScreen').classList.add('hidden'), 1500);
        if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
    },
    loadData() {
        try {
            this.posts = JSON.parse(localStorage.getItem('kmora_posts') || '[]');
            this.users = JSON.parse(localStorage.getItem('kmora_users') || '{}');
            this.comments = JSON.parse(localStorage.getItem('kmora_comments') || '{}');
            this.likes = JSON.parse(localStorage.getItem('kmora_likes') || '{}');
            this.currentUser = JSON.parse(localStorage.getItem('kmora_user') || 'null');
            this.storageMode = localStorage.getItem('kmora_storage') || 'local';
            this.apiUrl = localStorage.getItem('kmora_api') || '';
            this.theme = localStorage.getItem('kmora_theme') || 'light';
        } catch(e) {}
    },
    saveData() {
        localStorage.setItem('kmora_posts', JSON.stringify(this.posts));
        localStorage.setItem('kmora_users', JSON.stringify(this.users));
        localStorage.setItem('kmora_comments', JSON.stringify(this.comments));
        localStorage.setItem('kmora_likes', JSON.stringify(this.likes));
    },
    loadTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        const accent = localStorage.getItem('kmora_accent') || 'emerald';
        document.documentElement.setAttribute('data-accent', accent);
        const bg = localStorage.getItem('kmora_bg') || 'default';
        document.documentElement.setAttribute('data-bg', bg);
    },
    checkDevMode() {
        const isDev = App.currentUser && App.currentUser.email && App.currentUser.email.endsWith('@kmora.dev');
        const devItem = document.getElementById('devModeItem');
        if (devItem) devItem.style.display = isDev ? 'block' : 'none';
    },
    checkLogin() {
        const loginBtn = document.getElementById('loginBtn');
        const navUser = document.getElementById('navUser');
        const navAvatar = document.getElementById('navAvatar');
        if (this.currentUser) {
            loginBtn.style.display = 'none'; navUser.style.display = 'block';
            navAvatar.textContent = this.currentUser.nickname?.[0]?.toUpperCase() || 'U';
            navAvatar.title = this.currentUser.nickname || 'User';
            this.checkDevMode();
        } else {
            loginBtn.style.display = 'flex'; navUser.style.display = 'none';
            const devItem = document.getElementById('devModeItem');
            if (devItem) devItem.style.display = 'none';
        }
    },
    goHome() {
        document.getElementById('mainPage').style.display = 'block';
        document.getElementById('profilePage').style.display = 'none';
        document.getElementById('rankingPage').style.display = 'none';
        this.renderPosts();
    },
    setupEventListeners() {
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay && !overlay.classList.contains('detail-overlay')) {
                    overlay.classList.remove('active');
                }
            });
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') { Detail.close(); Auth.close(); Upload.close(); Settings.close(); }
        });
    },
    showToast(msg, type = 'info') {
        const toast = document.getElementById('toast');
        toast.textContent = msg; toast.className = 'toast ' + type;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    },
    showLoading(text) {
        const overlay = document.getElementById('loadingOverlay');
        const p = overlay.querySelector('p');
        if (p && text) p.textContent = text;
        overlay.classList.add('active');
    },
    hideLoading() { document.getElementById('loadingOverlay').classList.remove('active'); },
    generateId() { return Date.now().toString(36) + Math.random().toString(36).substr(2, 5); },
    formatTime(ts) {
        const d = new Date(ts);
        const y = d.getFullYear(), m = String(d.getMonth()+1).padStart(2,'0');
        const day = String(d.getDate()).padStart(2,'0');
        const h = String(d.getHours()).padStart(2,'0'), min = String(d.getMinutes()).padStart(2,'0');
        if (I18n.currentLang === 'ko') return y + '.' + m + '.' + day + ' ' + h + ':' + min;
        return y + '-' + m + '-' + day + ' ' + h + ':' + min;
    },
    renderPosts() {
        const grid = document.getElementById('photoGrid');
        const empty = document.getElementById('emptyState');
        if (this.posts.length === 0) { grid.innerHTML = ''; empty.classList.add('active'); return; }
        empty.classList.remove('active');
        const sorted = [...this.posts].sort((a, b) => b.createdAt - a.createdAt);
        grid.innerHTML = sorted.map(post => {
            const isVideo = post.type === 'video';
            const author = this.users[post.userId] || { nickname: 'Unknown' };
            return `<div class="photo-card" onclick="Detail.open('${post.id}')">
                <img class="card-media" src="${post.thumbUrl || post.url}" alt="${post.title}" loading="lazy">
                ${isVideo ? '<div class="card-badge video"><i class="fas fa-play"></i></div>' : ''}
                <div class="card-overlay">
                    <h4>${this.escapeHtml(post.title || 'Untitled')}</h4>
                    <div class="card-meta">
                        <span><i class="fas fa-user"></i> ${this.escapeHtml(author.nickname || 'User')}</span>
                        <span><i class="fas fa-heart"></i> ${this.likes[post.id]?.length || 0}</span>
                    </div>
                </div>
            </div>`;
        }).join('');
    },
    escapeHtml(text) { const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }
};

// ===== 认证系统 =====
const Auth = {
    openLogin() { document.getElementById('loginModal').classList.add('active'); document.getElementById('loginFlipInner').classList.remove('flipped'); I18n.apply(); },
    showRegister() { document.getElementById('loginFlipInner').classList.add('flipped'); },
    showLogin() { document.getElementById('loginFlipInner').classList.remove('flipped'); },
    flipToRegister() { this.showRegister(); },
    flipToLogin() { this.showLogin(); },
    close() {
        document.getElementById('loginModal').classList.remove('active');
        setTimeout(() => { document.getElementById('loginFlipInner').classList.remove('flipped'); document.getElementById('loginForm').reset(); document.getElementById('registerForm').reset(); }, 300);
    },
    login(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim().toLowerCase();
        const password = document.getElementById('loginPassword').value;
        const user = Object.values(App.users).find(u => u.email === email);
        if (!user) { App.showToast(I18n.t('userNotFound'), 'error'); return; }
        if (user.password !== password) { App.showToast(I18n.t('wrongPassword'), 'error'); return; }
        App.currentUser = user; localStorage.setItem('kmora_user', JSON.stringify(user));
        App.checkLogin(); App.showToast(I18n.t('loginSuccess')); this.close(); App.renderPosts();
    },
    register(e) {
        e.preventDefault();
        const email = document.getElementById('regEmail').value.trim().toLowerCase();
        const nickname = document.getElementById('regNickname').value.trim();
        const password = document.getElementById('regPassword').value;

        // 邮箱格式验证
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) { App.showToast(I18n.t('invalidEmail'), 'error'); return; }
        if (Object.values(App.users).some(u => u.email === email)) { App.showToast(I18n.t('emailExists'), 'error'); return; }

        const user = { id: App.generateId(), email, nickname: nickname || 'User' + Math.floor(Math.random()*1000), password, createdAt: Date.now() };
        App.users[user.id] = user; App.currentUser = user;
        localStorage.setItem('kmora_users', JSON.stringify(App.users));
        localStorage.setItem('kmora_user', JSON.stringify(user));
        // delete App.smsCodes[phone]; // 已改为邮箱注册
        App.checkLogin(); App.showToast(I18n.t('registerSuccess')); this.close(); App.renderPosts();
    },
    
    logout() {
        if (!confirm(I18n.t('logoutConfirm'))) return;
        App.currentUser = null; localStorage.removeItem('kmora_user');
        App.checkLogin(); Settings.close(); App.goHome(); App.showToast(I18n.t('loggedOut'));
    }
};

// ===== 上传系统（含图片压缩） =====
const Upload = {
    currentFile: null, compressedData: null, originalData: null, compressResult: null,
    open() {
        if (!App.currentUser) { App.showToast(I18n.t('needLogin'), 'error'); Auth.openLogin(); return; }
        document.getElementById('uploadModal').classList.add('active'); this.reset(); I18n.apply();
    },
    close() { document.getElementById('uploadModal').classList.remove('active'); this.reset(); },
    reset() {
        this.currentFile = null; this.compressedData = null; this.originalData = null; this.compressResult = null;
        document.getElementById('step1').classList.add('active'); document.getElementById('step2').classList.remove('active');
        document.getElementById('uploadPreview').style.display = 'none'; document.getElementById('uploadPreviewVideo').style.display = 'none';
        document.getElementById('uploadTitle').value = ''; document.getElementById('uploadDesc').value = ''; document.getElementById('uploadLocation').value = '';
    },
    async handle(file) {
        if (!file) return;
        if (file.size > 10 * 1024 * 1024) { App.showToast(I18n.t('fileTooBig'), 'error'); return; }
        this.currentFile = file;
        const isVideo = file.type.startsWith('video/');
        const isImage = file.type.startsWith('image/');

        if (isImage) {
            App.showLoading(I18n.t('compressing'));
            try {
                this.compressResult = await ImageCompressor.compress(file, 1200, 1200, 0.8);
                this.compressedData = this.compressResult.compressed;
                this.originalData = this.compressResult.original;
                const infoEl = document.getElementById('compressInfo');
                if (infoEl) {
                    infoEl.innerHTML = `<i class="fas fa-compress-alt"></i><span>${I18n.t('originalSize')}: ${this.compressResult.originalSize} → ${I18n.t('compressedSize')}: ${this.compressResult.compressedSize} (-${this.compressResult.ratio}%)</span>`;
                }
                App.hideLoading();
            } catch (err) { App.hideLoading(); App.showToast('Compression failed', 'error'); return; }
        } else if (isVideo) {
            const reader = new FileReader();
            reader.onload = (e) => { this.originalData = e.target.result; this.compressedData = e.target.result; };
            reader.readAsDataURL(file);
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('step1').classList.remove('active');
            document.getElementById('step2').classList.add('active');
            if (isVideo) {
                const video = document.getElementById('uploadPreviewVideo');
                video.src = e.target.result; video.style.display = 'block'; document.getElementById('uploadPreview').style.display = 'none';
            } else {
                const img = document.getElementById('uploadPreview');
                img.src = this.compressedData || e.target.result; img.style.display = 'block'; document.getElementById('uploadPreviewVideo').style.display = 'none';
            }
        };
        reader.readAsDataURL(file);
    },
    publish() {
        if (!this.compressedData && !this.originalData) { App.showToast(I18n.t('selectFile'), 'error'); return; }
        App.showLoading();
        setTimeout(() => {
            const isVideo = this.currentFile.type.startsWith('video/');
            const post = {
                id: App.generateId(), userId: App.currentUser.id,
                title: document.getElementById('uploadTitle').value.trim() || 'Untitled',
                desc: document.getElementById('uploadDesc').value.trim(),
                location: document.getElementById('uploadLocation').value.trim(),
                type: isVideo ? 'video' : 'image',
                url: this.compressedData || this.originalData,
                originalUrl: this.originalData || this.compressedData,
                thumbUrl: this.compressedData || this.originalData,
                createdAt: Date.now(),
                compressInfo: this.compressResult ? { originalSize: this.compressResult.originalSize, compressedSize: this.compressResult.compressedSize, ratio: this.compressResult.ratio } : null
            };
            App.posts.push(post); App.saveData(); App.renderPosts();
            App.hideLoading(); this.close(); App.showToast(I18n.t('publishSuccess'));
        }, 500);
    }
};

// ===== 详情页 + 3D翻转 =====
const Detail = {
    open(postId) {
        const post = App.posts.find(p => p.id === postId);
        if (!post) return;
        App.currentDetailId = postId;
        this.currentIndex = App.posts.findIndex(p => p.id === postId);
        this.setupSwipe();
        const author = App.users[post.userId] || { nickname: 'Unknown' };
        const isVideo = post.type === 'video';
        const isOwner = App.currentUser && App.currentUser.id === post.userId;
        const hasLiked = App.currentUser && (App.likes[postId] || []).includes(App.currentUser.id);

        const mediaWrap = document.getElementById('detailMedia');
        if (isVideo) mediaWrap.innerHTML = `<video src="${post.url}" controls autoplay playsinline style="max-width:100%;max-height:100%;"></video>`;
        else mediaWrap.innerHTML = `<img src="${post.url}" alt="${post.title}" style="max-width:100%;max-height:100%;object-fit:contain;">`;

        document.getElementById('detailAvatar').textContent = (author.nickname || 'U')[0].toUpperCase();
        document.getElementById('detailName').textContent = author.nickname || 'Unknown';
        document.getElementById('detailTime').textContent = App.formatTime(post.createdAt);
        document.getElementById('detailTitle').textContent = post.title || 'Untitled';
        document.getElementById('detailDesc').textContent = post.desc || '';
        const locEl = document.getElementById('detailLocation');
        if (post.location) { locEl.style.display = 'flex'; locEl.querySelector('span').textContent = post.location; }
        else locEl.style.display = 'none';

        document.getElementById('likeCount').textContent = (App.likes[postId] || []).length;
        document.getElementById('likeBtn').classList.toggle('active', hasLiked);
        document.getElementById('deleteBtn').style.display = isOwner ? 'flex' : 'none';
        this.renderComments(postId); I18n.apply();
        document.getElementById('detailModal').classList.add('active');
        document.getElementById('detailFlipper').classList.remove('flipped');
    },
    flip() { document.getElementById('detailFlipper').classList.toggle('flipped'); },
    close() {
        document.getElementById('detailModal').classList.remove('active');
        document.getElementById('detailFlipper').classList.remove('flipped');
        App.currentDetailId = null;
        this.currentIndex = -1;
        const video = document.querySelector('#detailMedia video');
        if (video) video.pause();
        this.removeSwipe();
    },
    currentIndex: -1,
    touchStartX: 0,
    touchStartY: 0,
    isSwiping: false,

    setupSwipe() {
        const mediaWrap = document.getElementById('detailMediaWrap');
        if (!mediaWrap) return;

        mediaWrap.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: true });
        mediaWrap.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: true });
        mediaWrap.addEventListener('touchend', this.onTouchEnd.bind(this), { passive: true });

        // 鼠标支持（桌面端）
        mediaWrap.addEventListener('mousedown', this.onMouseDown.bind(this));

        this.updateSwipeIndicator();
    },

    removeSwipe() {
        const mediaWrap = document.getElementById('detailMediaWrap');
        if (!mediaWrap) return;
        // 克隆节点移除所有事件监听器
        const newWrap = mediaWrap.cloneNode(true);
        mediaWrap.parentNode.replaceChild(newWrap, mediaWrap);
    },

    onTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.isSwiping = false;
    },

    onMouseDown(e) {
        this.touchStartX = e.clientX;
        this.touchStartY = e.clientY;
        this.isSwiping = false;
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
    },

    onMouseMove(e) {
        const diffX = e.clientX - this.touchStartX;
        const diffY = e.clientY - this.touchStartY;
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
            this.isSwiping = true;
        }
    },

    onMouseUp(e) {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        const diffX = e.clientX - this.touchStartX;
        const diffY = e.clientY - this.touchStartY;
        this.handleSwipe(diffX, diffY);
    },

    onTouchMove(e) {
        const diffX = e.touches[0].clientX - this.touchStartX;
        const diffY = e.touches[0].clientY - this.touchStartY;
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
            this.isSwiping = true;
        }
    },

    onTouchEnd(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - this.touchStartX;
        const diffY = touchEndY - this.touchStartY;
        this.handleSwipe(diffX, diffY);
    },

    handleSwipe(diffX, diffY) {
        // 如果正在翻转，不处理滑动
        if (document.getElementById('detailFlipper').classList.contains('flipped')) return;

        // 垂直滑动为主时不处理
        if (Math.abs(diffY) > Math.abs(diffX)) return;

        const threshold = 80; // 滑动阈值
        const sorted = [...App.posts].sort((a, b) => b.createdAt - a.createdAt);

        if (diffX < -threshold && this.currentIndex < sorted.length - 1) {
            // 向左滑 -> 下一张
            this.showSwipeHint('right');
            setTimeout(() => {
                const nextPost = sorted[this.currentIndex + 1];
                if (nextPost) this.open(nextPost.id);
            }, 200);
        } else if (diffX > threshold && this.currentIndex > 0) {
            // 向右滑 -> 上一张
            this.showSwipeHint('left');
            setTimeout(() => {
                const prevPost = sorted[this.currentIndex - 1];
                if (prevPost) this.open(prevPost.id);
            }, 200);
        }
    },

    showSwipeHint(direction) {
        const hint = document.getElementById('swipeHint' + (direction === 'left' ? 'Left' : 'Right'));
        if (hint) {
            hint.classList.add('show');
            setTimeout(() => hint.classList.remove('show'), 600);
        }
    },

    updateSwipeIndicator() {
        const sorted = [...App.posts].sort((a, b) => b.createdAt - a.createdAt);
        const prevDot = document.getElementById('swipeDotPrev');
        const nextDot = document.getElementById('swipeDotNext');
        if (prevDot) prevDot.classList.toggle('active', this.currentIndex > 0);
        if (nextDot) nextDot.classList.toggle('active', this.currentIndex < sorted.length - 1);
    },

    renderComments(postId) {
        const list = document.getElementById('commentList');
        const comments = App.comments[postId] || [];
        if (comments.length === 0) {
            const msgs = { zh: '暂无评论，来说两句吧~', ko: '아직 댓글이 없어요. 첫 댓글을 남겨보세요~', en: 'No comments yet. Be the first!' };
            list.innerHTML = `<p style="color:var(--text-tertiary);text-align:center;padding:20px;">${msgs[I18n.currentLang]}</p>`;
            return;
        }
        list.innerHTML = comments.map(c => {
            const user = App.users[c.userId] || { nickname: 'Unknown' };
            return `<div class="comment-item">
                <div class="avatar">${(user.nickname || 'U')[0].toUpperCase()}</div>
                <div class="comment-body">
                    <div class="comment-author">${App.escapeHtml(user.nickname || 'User')}</div>
                    <div class="comment-text">${App.escapeHtml(c.text)}</div>
                    <div class="comment-time">${App.formatTime(c.createdAt)}</div>
                </div>
            </div>`;
        }).join('');
    }
};

// ===== 点赞 =====
const Like = {
    toggle() {
        if (!App.currentUser) { App.showToast(I18n.t('needLogin'), 'error'); Auth.openLogin(); return; }
        const postId = App.currentDetailId; if (!postId) return;
        if (!App.likes[postId]) App.likes[postId] = [];
        const idx = App.likes[postId].indexOf(App.currentUser.id);
        if (idx > -1) { App.likes[postId].splice(idx, 1); App.showToast(I18n.t('unlikeSuccess')); }
        else { App.likes[postId].push(App.currentUser.id); App.showToast(I18n.t('likeSuccess')); }
        App.saveData();
        document.getElementById('likeCount').textContent = App.likes[postId].length;
        document.getElementById('likeBtn').classList.toggle('active', idx === -1);
    }
};

// ===== 评论 =====
const Comments = {
    add() {
        if (!App.currentUser) { App.showToast(I18n.t('needLogin'), 'error'); Auth.openLogin(); return; }
        const input = document.getElementById('commentInput');
        const text = input.value.trim();
        if (!text) { App.showToast(I18n.t('enterComment'), 'error'); return; }
        const postId = App.currentDetailId; if (!postId) return;
        if (!App.comments[postId]) App.comments[postId] = [];
        App.comments[postId].push({ id: App.generateId(), userId: App.currentUser.id, text, createdAt: Date.now() });
        App.saveData(); input.value = ''; Detail.renderComments(postId); App.showToast(I18n.t('commentSuccess'));
    }
};

// ===== 下载原图 =====
const Download = {
    start() {
        const post = App.posts.find(p => p.id === App.currentDetailId);
        if (!post) return;
        const downloadUrl = post.originalUrl || post.url;
        const ext = post.type === 'video' ? '.mp4' : '.jpg';
        const filename = (post.title || 'kmora').replace(/[^\w\u4e00-\u9fa5]/g, '_') + ext;
        const a = document.createElement('a');
        a.href = downloadUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        App.showToast(I18n.t('downloadOriginal') + '...');
    }
};

// ===== 删除 =====
const Delete = {
    confirm() { document.getElementById('deleteModal').classList.add('active'); },
    execute() {
        const postId = App.currentDetailId; if (!postId) return;
        App.posts = App.posts.filter(p => p.id !== postId);
        delete App.comments[postId]; delete App.likes[postId]; App.saveData();
        document.getElementById('deleteModal').classList.remove('active');
        Detail.close(); App.renderPosts(); App.showToast(I18n.t('deleted'));
    },
    cancel() { document.getElementById('deleteModal').classList.remove('active'); }
};

// ===== 设置 =====
const Settings = {
    open() {
        if (!App.currentUser) { App.showToast(I18n.t('needLogin'), 'error'); Auth.openLogin(); return; }
        document.getElementById('apiUrl').value = App.apiUrl;
        document.getElementById('settingsModal').classList.add('active');

        // 初始化邮箱修改区域
        const emailItem = document.getElementById('emailEditItem');
        const divider = document.getElementById('settingsDivider');
        if (App.currentUser) {
            emailItem.style.display = 'block';
            divider.style.display = 'block';
            document.getElementById('currentEmailDisplay').value = App.currentUser.email;
            document.getElementById('newEmailInput').value = '';
            document.getElementById('confirmPasswordInput').value = '';
        } else {
            emailItem.style.display = 'none';
            divider.style.display = 'none';
        }

        // 初始化主题色按钮
        const currentAccent = document.documentElement.getAttribute('data-accent') || 'emerald';
        document.querySelectorAll('.color-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.color === currentAccent);
        });

        // 初始化背景按钮
        const currentBg = document.documentElement.getAttribute('data-bg') || 'default';
        document.querySelectorAll('.bg-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.bg === currentBg);
        });

        // 初始化主题按钮
        const currentTheme = App.theme || 'light';
        document.querySelectorAll('#settingsModal .segmented-control').forEach(control => {
            // 主题明暗控制
            if (control.querySelector('[onclick*="setTheme"]')) {
                control.querySelectorAll('.segment').forEach(btn => {
                    const isLight = btn.getAttribute('onclick').includes("'light'");
                    btn.classList.toggle('active', (currentTheme === 'light' && isLight) || (currentTheme === 'dark' && !isLight));
                });
            }
            // 存储模式控制
            if (control.querySelector('[onclick*="setMode"]')) {
                control.querySelectorAll('.segment').forEach(btn => {
                    const isLocal = btn.getAttribute('onclick').includes("'local'");
                    btn.classList.toggle('active', (App.storageMode === 'local' && isLocal) || (App.storageMode !== 'local' && !isLocal));
                });
            }
        });

        // 显示开发者入口
        App.checkDevMode();
        I18n.apply();
    },
    close() { document.getElementById('settingsModal').classList.remove('active'); },

    // 邮箱修改（新增）
    updateEmail() {
        const newEmail = document.getElementById('newEmailInput').value.trim().toLowerCase();
        const password = document.getElementById('confirmPasswordInput').value;

        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!newEmail) { App.showToast(I18n.t('enterEmail'), 'error'); return; }
        if (!emailRegex.test(newEmail)) { App.showToast(I18n.t('invalidEmail'), 'error'); return; }

        // 验证密码
        if (!password) { App.showToast(I18n.t('wrongPassword'), 'error'); return; }
        if (App.currentUser.password !== password) { App.showToast(I18n.t('wrongPassword'), 'error'); return; }

        // 检查邮箱是否已被其他用户使用
        const existingUser = Object.values(App.users).find(u => u.email === newEmail && u.id !== App.currentUser.id);
        if (existingUser) { App.showToast(I18n.t('emailExists'), 'error'); return; }

        // 更新邮箱
        const oldEmail = App.currentUser.email;
        App.currentUser.email = newEmail;
        App.users[App.currentUser.id].email = newEmail;

        // 保存
        localStorage.setItem('kmora_user', JSON.stringify(App.currentUser));
        localStorage.setItem('kmora_users', JSON.stringify(App.users));

        // 更新显示
        document.getElementById('currentEmailDisplay').value = newEmail;
        document.getElementById('newEmailInput').value = '';
        document.getElementById('confirmPasswordInput').value = '';

        App.showToast(I18n.t('emailUpdated'), 'success');
    },

    setMode(mode, btn) { 
        App.storageMode = mode; 
        btn.parentElement.querySelectorAll('.segment').forEach(b => b.classList.remove('active')); 
        btn.classList.add('active'); 
    },
    setTheme(theme, btn) { 
        App.theme = theme; 
        document.documentElement.setAttribute('data-theme', theme); 
        btn.parentElement.querySelectorAll('.segment').forEach(b => b.classList.remove('active')); 
        btn.classList.add('active'); 
    },
    setAccent(color, btn) {
        document.documentElement.setAttribute('data-accent', color);
        btn.parentElement.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    },
    setBg(bg, btn) {
        document.documentElement.setAttribute('data-bg', bg);
        btn.parentElement.querySelectorAll('.bg-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    },
    save() {
        App.apiUrl = document.getElementById('apiUrl').value.trim();
        const accent = document.documentElement.getAttribute('data-accent') || 'emerald';
        const bg = document.documentElement.getAttribute('data-bg') || 'default';
        localStorage.setItem('kmora_storage', App.storageMode);
        localStorage.setItem('kmora_api', App.apiUrl);
        localStorage.setItem('kmora_theme', App.theme);
        localStorage.setItem('kmora_accent', accent);
        localStorage.setItem('kmora_bg', bg);
        App.showToast(I18n.t('settingsSaved')); this.close();
    },
    export() {
        const data = { posts: App.posts, users: App.users, comments: App.comments, likes: App.likes, exportTime: new Date().toISOString() };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = 'kmora-backup-' + Date.now() + '.json';
        a.click(); App.showToast(I18n.t('dataExported'));
    }
};

// ===== 个人中心 =====
const Profile = {
    open() {
        if (!App.currentUser) { App.showToast(I18n.t('needLogin'), 'error'); Auth.openLogin(); return; }
        document.getElementById('mainPage').style.display = 'none';
        document.getElementById('profilePage').style.display = 'block';
        const user = App.currentUser;
        document.getElementById('profileAvatar').textContent = (user.nickname || 'U')[0].toUpperCase();
        document.getElementById('profileName').textContent = user.nickname || 'User';
        document.getElementById('profileEmail').textContent = user.email.replace(/(.{2}).*(@.*)/, '$1***$2');
        const myPosts = App.posts.filter(p => p.userId === user.id);
        document.getElementById('profileCount').textContent = myPosts.length;
        let likeCount = 0; myPosts.forEach(p => { likeCount += (App.likes[p.id] || []).length; });
        document.getElementById('profileLikes').textContent = likeCount;
        const grid = document.getElementById('myPhotoGrid');
        if (myPosts.length === 0) {
            const msgs = { zh: '还没有发布过内容', ko: '아직 게시물이 없어요', en: 'No posts yet' };
            grid.innerHTML = `<p style="color:var(--text-tertiary);text-align:center;padding:40px;">${msgs[I18n.currentLang]}</p>`;
        } else {
            const sorted = [...myPosts].sort((a, b) => b.createdAt - a.createdAt);
            grid.innerHTML = sorted.map(post => `<div class="photo-card" onclick="Detail.open('${post.id}')">
                <img class="card-media" src="${post.thumbUrl || post.url}" alt="${post.title}" loading="lazy">
                <div class="card-overlay"><h4>${App.escapeHtml(post.title || 'Untitled')}</h4></div>
            </div>`).join('');
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const navAvatar = document.getElementById('navAvatar');
    if (navAvatar) navAvatar.onclick = () => Profile.open();
});

// ===== 榜单系统 =====
const Ranking = {
    open() {
        document.getElementById('mainPage').style.display = 'none';
        document.getElementById('profilePage').style.display = 'none';
        document.getElementById('rankingPage').style.display = 'block';
        this.render();
        I18n.apply();
    },
    render() {
        const championEl = document.getElementById('rankingChampion');
        const listEl = document.getElementById('rankingList');
        const emptyEl = document.getElementById('rankingEmpty');

        if (App.posts.length === 0) {
            championEl.style.display = 'none';
            listEl.innerHTML = '';
            emptyEl.classList.add('active');
            return;
        }
        emptyEl.classList.remove('active');

        // 计算每个帖子的点赞数并排序
        const ranked = App.posts.map(post => {
            const likeCount = (App.likes[post.id] || []).length;
            const commentCount = (App.comments[post.id] || []).length;
            return { ...post, likeCount, commentCount };
        }).sort((a, b) => b.likeCount - a.likeCount);

        // 冠军
        if (ranked.length > 0 && ranked[0].likeCount > 0) {
            championEl.style.display = 'block';
            this.renderChampion(ranked[0]);
        } else {
            championEl.style.display = 'none';
        }

        // 榜单列表（从第2名开始）
        const listItems = ranked.slice(1).filter(p => p.likeCount > 0);
        if (listItems.length === 0) {
            listEl.innerHTML = '';
        } else {
            listEl.innerHTML = listItems.map((post, idx) => {
                const author = App.users[post.userId] || { nickname: 'Unknown' };
                const rank = idx + 2;
                const rankClass = rank === 2 ? 'top3 silver' : rank === 3 ? 'top3 bronze' : 'top3';
                const isVideo = post.type === 'video';
                return `<div class="ranking-item" onclick="Detail.open('${post.id}')">
                    <div class="ranking-rank">
                        <span class="rank-number ${rank <= 3 ? rankClass : ''}">${rank}</span>
                    </div>
                    <div class="ranking-thumb">
                        <img src="${post.thumbUrl || post.url}" alt="${post.title}" loading="lazy">
                        ${isVideo ? '<div class="card-badge video"><i class="fas fa-play"></i></div>' : ''}
                    </div>
                    <div class="ranking-content">
                        <h4>${App.escapeHtml(post.title || 'Untitled')}</h4>
                        <div class="ranking-author">${App.escapeHtml(author.nickname || 'User')}</div>
                        <div class="ranking-stats">
                            <span class="likes"><i class="fas fa-heart"></i> ${post.likeCount}</span>
                            <span class="comments"><i class="fas fa-comments"></i> ${post.commentCount}</span>
                        </div>
                    </div>
                </div>`;
            }).join('');
        }
    },
    renderChampion(post) {
        const author = App.users[post.userId] || { nickname: 'Unknown' };
        const isVideo = post.type === 'video';

        const card = document.querySelector('.champion-card');
        if (card) card.dataset.postId = post.id;

        const mediaEl = document.getElementById('championMedia');
        if (isVideo) {
            mediaEl.innerHTML = `<video src="${post.url}" poster="${post.thumbUrl || post.url}" style="width:100%;height:100%;object-fit:cover;"></video>`;
        } else {
            mediaEl.innerHTML = `<img src="${post.url}" alt="${post.title}" style="width:100%;height:100%;object-fit:cover;">`;
        }

        document.getElementById('championAvatar').textContent = (author.nickname || 'U')[0].toUpperCase();
        document.getElementById('championName').textContent = author.nickname || 'Unknown';
        document.getElementById('championTime').textContent = App.formatTime(post.createdAt);
        document.getElementById('championTitle').textContent = post.title || 'Untitled';
        document.getElementById('championDesc').textContent = post.desc || '';
        document.getElementById('championLikes').textContent = post.likeCount;
        document.getElementById('championComments').textContent = post.commentCount;
    }
};

// ===== 开发者模式 =====
const DevMode = {
    open() {
        if (!App.currentUser || !App.currentUser.email.endsWith('@kmora.dev')) {
            App.showToast('Permission denied', 'error');
            return;
        }
        document.getElementById('devModeModal').classList.add('active');
        this.renderStats();
        this.renderUsers();
        I18n.apply();
    },
    close() {
        document.getElementById('devModeModal').classList.remove('active');
    },
    renderStats() {
        const statsEl = document.getElementById('devStats');
        const totalUsers = Object.keys(App.users).length;
        const totalPosts = App.posts.length;
        let totalComments = 0;
        Object.values(App.comments).forEach(arr => totalComments += arr.length);

        const t = I18n.t;
        statsEl.innerHTML = `
            <div class="dev-stat-card">
                <span class="stat-number">${totalUsers}</span>
                <span class="stat-label">${t('totalUsers')}</span>
            </div>
            <div class="dev-stat-card">
                <span class="stat-number">${totalPosts}</span>
                <span class="stat-label">${t('totalPosts')}</span>
            </div>
            <div class="dev-stat-card">
                <span class="stat-number">${totalComments}</span>
                <span class="stat-label">${t('totalComments')}</span>
            </div>
        `;
    },
    renderUsers() {
        const tbody = document.getElementById('devUserTableBody');
        const users = Object.values(App.users).sort((a, b) => b.createdAt - a.createdAt);

        tbody.innerHTML = users.map(u => {
            const userPosts = App.posts.filter(p => p.userId === u.id).length;
            let userLikes = 0;
            App.posts.filter(p => p.userId === u.id).forEach(p => {
                userLikes += (App.likes[p.id] || []).length;
            });
            return `<tr>
                <td class="user-id">${u.id}</td>
                <td class="user-email">${App.escapeHtml(u.email)}</td>
                <td class="user-nickname">${App.escapeHtml(u.nickname || 'User')}</td>
                <td class="user-count">${userPosts}</td>
                <td class="user-count">${userLikes}</td>
                <td class="user-time">${App.formatTime(u.createdAt)}</td>
            </tr>`;
        }).join('');
    },
    exportUsers() {
        const data = {
            users: App.users,
            exportTime: new Date().toISOString(),
            exportedBy: App.currentUser?.email || 'unknown'
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'kmora-users-' + Date.now() + '.json';
        a.click();
        App.showToast(I18n.t('exportUsers') + ' ✓');
    }
};

window.addEventListener('DOMContentLoaded', () => App.init());
