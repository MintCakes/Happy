// 立冬祝福语数组 - 100个不同的祝福
const winterWishes = [
    "立冬快乐！愿你温暖过冬",
    "寒风萧瑟，祝你立冬安康",
    "立冬来临，问候暖心",
    "冬日温情，暖你心房",
    "立冬时节，祝你幸福美满",
    "瑞雪兆丰年，立冬添祥瑞",
    "冬日有暖阳，愿你心舒畅",
    "立冬快乐，健康常伴",
    "寒风吹不散我的祝福",
    "立冬到，祝福到，温暖到",
    "冬日安康，幸福绵长",
    "立冬快乐，一切安好",
    "天寒地冻，愿你温暖如初",
    "立冬之日，送上最暖祝福",
    "冬日吉祥，如意安康",
    "立冬快乐，幸福安康",
    "寒风起，温暖至",
    "立冬快乐，冬日愉快",
    "冬日有你，温暖无比",
    "立冬快乐，身体健康",
    "冬日浪漫，温暖相伴",
    "立冬快乐，心情愉悦",
    "寒风萧瑟，祝福暖心",
    "立冬快乐，生活美满",
    "冬日安康，万事顺遂",
    "立冬快乐，吉祥如意",
    "冬日温情，幸福常伴",
    "立冬快乐，平安健康",
    "冬日暖阳，温暖人心",
    "立冬快乐，笑口常开",
    "寒风刺骨，祝福暖心",
    "立冬快乐，前程似锦",
    "冬日安康，吉祥如意",
    "立冬快乐，事业有成",
    "冬日温馨，快乐常伴",
    "立冬快乐，家庭美满",
    "寒风凛冽，祝福不减",
    "立冬快乐，好运连连",
    "冬日安康，幸福快乐",
    "立冬快乐，一切顺利",
    "冬日吉祥，万事如意",
    "立冬快乐，身体健康",
    "冬日温暖，快乐相伴",
    "立冬快乐，笑口常开",
    "寒风来袭，祝福如昔",
    "立冬快乐，前程似锦",
    "冬日安康，吉祥如意",
    "立冬快乐，工作顺利",
    "冬日温馨，幸福常伴",
    "立冬快乐，家庭和睦",
    "寒风萧瑟，祝福暖心",
    "立冬快乐，身体健康",
    "冬日阳光，温暖心房",
    "立冬快乐，笑口常开",
    "寒风刺骨，祝福不减",
    "立冬快乐，万事如意",
    "冬日安康，幸福快乐",
    "立冬快乐，吉祥如意",
    "冬日温情，快乐相伴",
    "立冬快乐，身体健康",
    "寒风凛冽，祝福暖心",
    "立冬快乐，前程似锦",
    "冬日安康，吉祥如意",
    "立冬快乐，事业有成",
    "冬日温馨，幸福常伴",
    "立冬快乐，家庭美满",
    "寒风萧瑟，祝福依旧",
    "立冬快乐，身体健康",
    "冬日阳光，温暖人心",
    "立冬快乐，笑口常开",
    "寒风刺骨，祝福不减",
    "立冬快乐，万事如意",
    "冬日安康，幸福快乐",
    "立冬快乐，吉祥如意",
    "冬日温情，快乐相伴",
    "立冬快乐，身体健康",
    "寒风凛冽，祝福暖心",
    "立冬快乐，前程似锦",
    "冬日安康，吉祥如意",
    "立冬快乐，事业有成",
    "冬日温馨，幸福常伴",
    "立冬快乐，家庭美满",
    "寒风萧瑟，祝福依旧",
    "立冬快乐，身体健康",
    "冬日阳光，温暖人心",
    "立冬快乐，笑口常开",
    "寒风刺骨，祝福不减",
    "立冬快乐，万事如意",
    "冬日安康，幸福快乐",
    "立冬快乐，吉祥如意",
    "冬日温情，快乐相伴",
    "立冬快乐，身体健康",
    "寒风凛冽，祝福暖心",
    "立冬快乐，前程似锦",
    "冬日安康，吉祥如意",
    "立冬快乐，事业有成",
    "冬日温馨，幸福常伴"
];

// 粒子系统配置（降低复杂度和数量）
const particleConfig = {
    count: 30, // 减少粒子数量
    emojiTypes: ['❄️', '★', '✨'], // 减少表情类型
    particleTypes: ['snow', 'glow'], // 移除复杂的firework类型
    colors: ['#ffffff', '#f0f8ff', '#e6f3ff', '#54a0ff'], // 减少颜色数量
    minSize: 12,
    maxSize: 24,
    minSpeed: 0.5,
    maxSpeed: 2,
    minOpacity: 0.5,
    maxOpacity: 0.9
};

// DOM元素引用
const particleContainer = document.getElementById('particle-container');
const popupsContainer = document.getElementById('popups-container');
const showPopupBtn = document.getElementById('show-winter-popup');
const clearAllBtn = document.getElementById('clear-all-popups');
const backgroundMusic = document.getElementById('background-music');
const musicControlBtn = document.getElementById('music-control');

// 追踪弹窗数量
let popupCount = 0;
const MAX_POPUPS = 50; // 减少最大弹窗数量

// 粒子池管理
const particlePool = [];
const activeParticles = [];

// 初始化粒子背景
function initParticles() {
    // 清空现有粒子
    particleContainer.innerHTML = '';
    activeParticles.length = 0;
    
    // 创建粒子池
    for (let i = 0; i < particleConfig.count; i++) {
        const particle = createParticle();
        particleContainer.appendChild(particle);
        particlePool.push(particle);
    }
    
    // 启动统一的动画循环
    requestAnimationFrame(animateAllParticles);
}

// 创建基础粒子（简化版）
function createParticle() {
    // 随机选择粒子类型
    const type = particleConfig.particleTypes[Math.floor(Math.random() * particleConfig.particleTypes.length)];
    
    let particle;
    
    if (type === 'snow') {
        particle = document.createElement('div');
        const emoji = particleConfig.emojiTypes[Math.floor(Math.random() * particleConfig.emojiTypes.length)];
        particle.textContent = emoji;
        particle.classList.add('snow-particle');
    } else {
        // glow粒子
        particle = document.createElement('div');
        particle.classList.add('glow-particle');
        const color = particleConfig.colors[Math.floor(Math.random() * particleConfig.colors.length)];
        particle.style.background = `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`;
    }
    
    // 设置基础样式
    const size = particleConfig.minSize + Math.random() * (particleConfig.maxSize - particleConfig.minSize);
    const opacity = particleConfig.minOpacity + Math.random() * (particleConfig.maxOpacity - particleConfig.minOpacity);
    const speed = particleConfig.minSpeed + Math.random() * (particleConfig.maxSpeed - particleConfig.minSpeed);
    
    if (particle.classList.contains('snow-particle')) {
        particle.style.fontSize = `${size}px`;
    } else {
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
    }
    
    // 应用通用样式
    particle.style.opacity = opacity;
    particle.style.position = 'absolute';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.pointerEvents = 'none';
    
    // 存储粒子状态数据
    particle.particleData = {
        type: type,
        x: parseFloat(particle.style.left),
        y: parseFloat(particle.style.top),
        speed: speed,
        angle: Math.random() * Math.PI * 2,
        size: size,
        opacity: opacity,
        timestamp: 0,
        // 为雪花添加额外属性
        amplitude: type === 'snow' ? 15 + Math.random() * 20 : 0,
        frequency: type === 'snow' ? 1 + Math.random() * 1.5 : 0
    };
    
    return particle;
}

// 统一的动画循环函数
let lastFrameTime = 0;
const frameRate = 60; // 目标帧率
const frameDelay = 1000 / frameRate;

function animateAllParticles(currentTime) {
    // 控制帧率
    if (currentTime - lastFrameTime < frameDelay) {
        requestAnimationFrame(animateAllParticles);
        return;
    }
    
    lastFrameTime = currentTime;
    
    // 更新所有活跃粒子
    particlePool.forEach(particle => {
        if (!particle.particleData) return;
        
        const data = particle.particleData;
        
        // 初始化时间戳
        if (!data.timestamp) data.timestamp = currentTime;
        
        // 计算时间差
        const elapsed = (currentTime - data.timestamp) * 0.001; // 转换为秒
        
        // 根据粒子类型更新位置
        if (data.type === 'snow') {
            // 雪花粒子 - 飘落并摇摆
            data.y += data.speed * 2;
            data.x += Math.sin(elapsed * data.frequency * Math.PI) * data.amplitude * 0.1;
            
            // 旋转效果
            const rotation = elapsed * 30; // 每秒旋转30度
            particle.style.transform = `rotate(${rotation}deg)`;
            
            // 边界检查 - 雪花重置到顶部
            if (data.y > 120) {
                data.y = -10;
                data.x = Math.random() * 100;
            }
        } else {
            // 发光粒子 - 随机移动
            data.x += Math.cos(data.angle) * data.speed * 0.1;
            data.y += Math.sin(data.angle) * data.speed * 0.1;
            
            // 缓慢改变角度
            data.angle += (Math.random() - 0.5) * 0.02;
            
            // 边界检查
            if (data.x < -20) data.x = 120;
            if (data.x > 120) data.x = -20;
            if (data.y < -20) data.y = 120;
            if (data.y > 120) data.y = -20;
            
            // 轻微脉动效果 (降低计算复杂度)
            if (elapsed % 2 < 0.01) {
                const scale = 1 + 0.2 * Math.sin(elapsed * Math.PI);
                particle.style.transform = `scale(${scale})`;
            }
        }
        
        // 应用位置更新
        particle.style.left = `${data.x}%`;
        particle.style.top = `${data.y}%`;
    });
    
    requestAnimationFrame(animateAllParticles);
}

// 简化的烟花效果
function createFirework(x, y) {
    // 减少粒子数量
    const particleCount = 15 + Math.floor(Math.random() * 20);
    const colors = particleConfig.colors[Math.floor(Math.random() * particleConfig.colors.length)];
    
    // 使用DocumentFragment减少DOM操作
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');
        
        // 简化的样式设置
        const size = 3 + Math.random() * 4;
        const angle = (i / particleCount) * Math.PI * 2;
        const distance = 40 + Math.random() * 60;
        const duration = 0.8 + Math.random() * 0.6;
        
        // 计算终点位置
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;
        
        // 应用样式
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = colors;
        particle.style.borderRadius = '50%';
        particle.style.position = 'fixed';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.zIndex = '9999';
        particle.style.transform = 'translate(-50%, -50%)';
        particle.style.opacity = '1';
        particle.style.transition = `all ${duration}s ease-out`;
        
        fragment.appendChild(particle);
        
        // 触发动画
        setTimeout(() => {
            if (particle.parentNode) {
                particle.style.left = `${endX}px`;
                particle.style.top = `${endY}px`;
                particle.style.opacity = '0';
            }
        }, 10);
        
        // 动画结束后移除
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, duration * 1000);
    }
    
    // 一次性添加到DOM
    document.body.appendChild(fragment);
}

// 显示多个祝福弹窗
function showWishPopups() {
    // 如果已经有弹窗，先清除
    clearAllPopups();
    
    // 播放背景音乐
    playBackgroundMusic();
    
    // 显示清除按钮
    clearAllBtn.classList.remove('hidden');
    
    // 减少弹窗数量并使用批量创建策略
    const batchSize = 5;
    const totalBatches = Math.ceil(MAX_POPUPS / batchSize);
    
    for (let batch = 0; batch < totalBatches; batch++) {
        setTimeout(() => {
            // 批量创建弹窗
            createPopupsBatch(batch * batchSize, Math.min((batch + 1) * batchSize, MAX_POPUPS));
        }, batch * 100); // 每批间隔100ms
    }
}

// 批量创建弹窗
function createPopupsBatch(startIndex, endIndex) {
    const fragment = document.createDocumentFragment();
    const createdPopups = [];
    
    for (let i = startIndex; i < endIndex; i++) {
        const popup = createWishPopup();
        fragment.appendChild(popup);
        createdPopups.push(popup);
    }
    
    // 一次性添加到DOM
    popupsContainer.appendChild(fragment);
    
    // 批量应用动画
    setTimeout(() => {
        createdPopups.forEach(popup => {
            popup.style.transform = `rotate(${popup.dataset.rotation}deg) scale(1)`;
            popup.style.transition = 'transform 0.3s ease-out';
        });
    }, 10);
    
    // 批量添加事件监听器
    createdPopups.forEach(popup => {
        // 添加拖拽功能（简化版）
        makePopupDraggable(popup);
        
        // 添加点击关闭事件（使用委托的思想）
        popup.addEventListener('click', handlePopupClick);
    });
}

// 弹窗点击处理函数
function handlePopupClick(e) {
    const popup = this;
    
    // 检查是否点击了关闭按钮
    if (e.target && e.target.classList && e.target.classList.contains('wish-popup-close')) {
        removePopup(popup);
        return;
    }
    
    // 检查是否点击了内容区域（用于拖拽）
    if (e.target && e.target.closest('.wish-popup-content')) {
        return; // 拖拽处理在makePopupDraggable中
    }
    
    // 点击其他区域关闭弹窗
    removePopup(popup);
}

// 创建单个祝福弹窗
function createWishPopup() {
    const popup = document.createElement('div');
    popup.classList.add('wish-popup');
    
    // 随机选择祝福（减少数组访问）
    const wishIndex = Math.floor(Math.random() * winterWishes.length);
    const wish = winterWishes[wishIndex];
    
    // 简化图标选择
    const icons = ['❄️', '★', '✨', '🌟'];
    const icon = icons[Math.floor(Math.random() * icons.length)];
    
    // 使用更简单的HTML结构
    popup.innerHTML = `
        <div class="wish-popup-content">
            <h3>${icon} 立冬快乐 ${icon}</h3>
            <p>${wish}</p>
        </div>
        <span class="wish-popup-close">×</span>
    `;
    
    // 随机位置
    const padding = 30; // 减少边距以更好地利用空间
    const popupWidth = 200; // 固定宽度
    const popupHeight = 120; // 固定高度
    const maxX = window.innerWidth - popupWidth - padding * 2;
    const maxY = window.innerHeight - popupHeight - padding * 2;
    const x = padding + Math.random() * maxX;
    const y = padding + Math.random() * maxY;
    
    // 应用位置
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
    
    // 随机旋转角度并存储
    const rotation = (Math.random() - 0.5) * 8; // 减小旋转范围
    popup.style.transform = `rotate(${rotation}deg) scale(0)`;
    popup.dataset.rotation = rotation;
    
    // 随机颜色主题
    const themes = [
        'rgba(255, 107, 107, 0.2)',
        'rgba(84, 160, 255, 0.2)',
        'rgba(24, 210, 110, 0.2)',
        'rgba(254, 202, 87, 0.2)',
        'rgba(255, 159, 243, 0.2)'
    ];
    const themeColor = themes[Math.floor(Math.random() * themes.length)];
    popup.style.background = themeColor;
    
    // 增加计数
    popupCount++;
    
    return popup;
}

// 移除单个弹窗
function removePopup(popup) {
    if (!popup || !popup.parentNode) return;
    
    // 添加移除动画
    popup.style.transform = 'scale(0) rotate(0deg)';
    popup.style.opacity = '0';
    
    // 移除事件监听器
    popup.removeEventListener('click', handlePopupClick);
    
    // 动画结束后移除
    setTimeout(() => {
        if (popup.parentNode) {
            popup.parentNode.removeChild(popup);
            popupCount = Math.max(0, popupCount - 1);
            
            // 如果没有弹窗了，隐藏清除按钮
            if (popupCount === 0) {
                clearAllBtn.classList.add('hidden');
            }
        }
    }, 200);
}

// 清除所有弹窗（优化版）
function clearAllPopups() {
    // 直接清空容器
    popupsContainer.innerHTML = '';
    
    // 重置计数
    popupCount = 0;
    
    // 隐藏清除按钮
    clearAllBtn.classList.add('hidden');
}

// 简化版拖拽功能
function makePopupDraggable(popupElement) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
    
    // 点击内容区域开始拖拽
    const content = popupElement.querySelector('.wish-popup-content');
    if (content) {
        content.addEventListener('mousedown', (e) => {
            // 检查是否点击了关闭按钮
            if (e.target && e.target.classList && e.target.classList.contains('wish-popup-close')) {
                return;
            }
            
            isDragging = true;
            
            // 计算偏移
            const rect = popupElement.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            
            // 提高层级
            popupElement.style.zIndex = '1000';
            
            // 添加样式提示正在拖拽
            popupElement.style.cursor = 'grabbing';
            popupElement.style.transform = `rotate(${popupElement.dataset.rotation}deg) scale(1.05)`;
            popupElement.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.6)';
        });
    }
    
    // 移动时更新位置
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        // 计算新位置
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        
        // 限制在视口内
        const maxX = window.innerWidth - popupElement.offsetWidth;
        const maxY = window.innerHeight - popupElement.offsetHeight;
        const boundedX = Math.max(0, Math.min(x, maxX));
        const boundedY = Math.max(0, Math.min(y, maxY));
        
        // 应用新位置
        popupElement.style.left = `${boundedX}px`;
        popupElement.style.top = `${boundedY}px`;
        
        // 阻止默认行为
        e.preventDefault();
    });
    
    // 释放鼠标时停止拖拽
    function stopDragging() {
        if (isDragging) {
            isDragging = false;
            popupElement.style.cursor = 'move';
            popupElement.style.transform = `rotate(${popupElement.dataset.rotation}deg) scale(1)`;
            popupElement.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        }
    }
    
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mouseleave', stopDragging);
}

// 播放背景音乐（简化版）
function playBackgroundMusic() {
    if (backgroundMusic) {
        // 尝试播放音乐，但不处理错误（减少控制台日志）
        backgroundMusic.play().catch(() => {});
        musicControlBtn.textContent = '🔇 暂停音乐';
    }
}

// 暂停背景音乐
function pauseBackgroundMusic() {
    if (backgroundMusic) {
        backgroundMusic.pause();
        musicControlBtn.textContent = '🔊 播放音乐';
    }
}

// 切换背景音乐状态
function toggleBackgroundMusic() {
    if (backgroundMusic) {
        if (backgroundMusic.paused) {
            playBackgroundMusic();
        } else {
            pauseBackgroundMusic();
        }
    }
}

// 处理屏幕点击事件（优化版）
function handleScreenClick(event) {
    // 避免点击按钮或弹窗时触发
    if (event.target.closest('button') || event.target.closest('.wish-popup')) return;
    
    // 随机触发效果，但降低频率
    const random = Math.random();
    if (random < 0.5) { // 减少触发频率
        if (random < 0.35) {
            createSnowBurst(event.clientX, event.clientY);
        } else {
            createFirework(event.clientX, event.clientY);
        }
    }
}

// 创建雪花爆发效果（简化版）
function createSnowBurst(x, y, count = 15) { // 减少粒子数量
    const fragment = document.createDocumentFragment();
    const particles = [];
    
    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.textContent = particleConfig.emojiTypes[Math.floor(Math.random() * particleConfig.emojiTypes.length)];
        snowflake.classList.add('snow-particle');
        
        // 固定大小和样式范围
        const size = 12 + Math.random() * 12;
        const opacity = 0.7 + Math.random() * 0.3;
        const duration = 0.8 + Math.random() * 0.4;
        
        // 简化角度和距离计算
        const angle = (i / count) * Math.PI * 2;
        const distance = 30 + Math.random() * 50;
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;
        
        // 设置样式
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.opacity = opacity;
        snowflake.style.position = 'fixed';
        snowflake.style.left = `${x}px`;
        snowflake.style.top = `${y}px`;
        snowflake.style.zIndex = '9999';
        snowflake.style.pointerEvents = 'none';
        snowflake.style.transform = 'translate(-50%, -50%) scale(0)';
        
        // 保存动画数据
        snowflake.burstData = {
            endX,
            endY,
            duration,
            startTime: null
        };
        
        fragment.appendChild(snowflake);
        particles.push(snowflake);
    }
    
    // 一次性添加到DOM
    document.body.appendChild(fragment);
    
    // 使用requestAnimationFrame优化动画性能
    function animateBurst(timestamp) {
        let active = false;
        
        particles.forEach(snowflake => {
            if (!snowflake.burstData || !snowflake.parentNode) return;
            
            const data = snowflake.burstData;
            if (!data.startTime) data.startTime = timestamp;
            
            const elapsed = (timestamp - data.startTime) / (data.duration * 1000);
            
            if (elapsed < 1) {
                active = true;
                
                // 计算当前进度
                const progress = Math.min(elapsed, 1);
                
                // 应用变换
                snowflake.style.transform = `translate(-50%, -50%) translate(${(data.endX - x) * progress}px, ${(data.endY - y) * progress}px) rotate(${progress * 720}deg) scale(${progress})`;
                snowflake.style.opacity = `${1 - progress}`;
                snowflake.style.transition = 'none'; // 使用RAF控制变换，避免transition
            } else {
                // 移除粒子
                if (snowflake.parentNode) {
                    snowflake.remove();
                }
            }
        });
        
        if (active) {
            requestAnimationFrame(animateBurst);
        }
    }
    
    requestAnimationFrame(animateBurst);
}

// 优化版鼠标移动事件处理（减少计算量）
let lastMouseMoveTime = 0;
const mouseMoveThrottle = 50; // 每50ms处理一次
let mouseX = 0, mouseY = 0;

function handleMouseMove(event) {
    const currentTime = Date.now();
    
    // 节流处理
    if (currentTime - lastMouseMoveTime < mouseMoveThrottle) {
        return;
    }
    
    lastMouseMoveTime = currentTime;
    mouseX = event.clientX;
    mouseY = event.clientY;
    
    // 使用requestAnimationFrame延迟处理
    if (!window.mouseMoveScheduled) {
        window.mouseMoveScheduled = true;
        requestAnimationFrame(processMouseMove);
    }
}

// 处理鼠标移动的实际计算
function processMouseMove() {
    window.mouseMoveScheduled = false;
    
    // 只处理部分粒子
    const particles = document.querySelectorAll('.snow-particle');
    
    // 限制处理的粒子数量
    const processLimit = 10;
    const step = Math.max(1, Math.floor(particles.length / processLimit));
    
    for (let i = 0; i < particles.length; i += step) {
        const particle = particles[i];
        
        // 获取粒子位置
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;
        
        // 计算距离
        const distance = Math.sqrt(
            Math.pow(mouseX - particleX, 2) +
            Math.pow(mouseY - particleY, 2)
        );
        
        // 简单的交互效果
        const interactionDistance = 80;
        if (distance < interactionDistance) {
            // 简化的排斥效果
            const force = Math.min(1, (interactionDistance - distance) / interactionDistance * 3);
            const angle = Math.atan2(mouseY - particleY, mouseX - particleX);
            const pushX = Math.cos(angle) * force * -15;
            const pushY = Math.sin(angle) * force * -15;
            
            particle.style.transition = 'transform 0.1s ease-out';
            particle.style.transform = `translate(${pushX}px, ${pushY}px) scale(1.1)`;
            
            // 清除之前的定时器
            if (particle.mouseTimer) {
                clearTimeout(particle.mouseTimer);
            }
            
            // 重置效果
            particle.mouseTimer = setTimeout(() => {
                particle.style.transition = 'transform 0.5s ease-out';
                particle.style.transform = 'translate(0, 0) scale(1)';
            }, 150);
        }
    }
}

// 处理键盘事件（简化版）
function handleKeyPress(event) {
    // 使用switch语句优化
    switch (event.key) {
        case 'Escape':
            clearAllPopups();
            break;
        case ' ':
            event.preventDefault();
            if (popupCount === 0) {
                showWishPopups();
            }
            break;
        case 'm':
        case 'M':
            toggleBackgroundMusic();
            break;
    }
}

// 初始化页面（优化版）
window.addEventListener('DOMContentLoaded', () => {
    // 初始化粒子系统
    initParticles();
    
    // 添加事件监听器
    showPopupBtn.addEventListener('click', showWishPopups);
    clearAllBtn.addEventListener('click', clearAllPopups);
    musicControlBtn.addEventListener('click', toggleBackgroundMusic);
    
    // 添加屏幕点击效果（降低频率）
    let lastClickTime = 0;
    const clickThrottle = 200;
    
    document.addEventListener('click', (event) => {
        const currentTime = Date.now();
        if (currentTime - lastClickTime > clickThrottle) {
            lastClickTime = currentTime;
            handleScreenClick(event);
        }
    });
    
    // 添加鼠标移动互动（节流处理）
    document.addEventListener('mousemove', handleMouseMove);
    
    // 添加键盘支持
    document.addEventListener('keydown', handleKeyPress);
    
    // 添加窗口大小变化（优化处理）
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // 调整弹窗位置
            const popups = popupsContainer.querySelectorAll('.wish-popup');
            popups.forEach(popup => {
                const rect = popup.getBoundingClientRect();
                const maxX = window.innerWidth - rect.width;
                const maxY = window.innerHeight - rect.height;
                
                // 获取当前位置
                let x = parseInt(popup.style.left, 10);
                let y = parseInt(popup.style.top, 10);
                
                // 确保弹窗在视口内
                if (x > maxX) popup.style.left = `${maxX}px`;
                if (y > maxY) popup.style.top = `${maxY}px`;
                if (x < 0) popup.style.left = '0px';
                if (y < 0) popup.style.top = '0px';
            });
        }, 100); // 延迟处理，避免频繁调整
    });
    
    // 禁用右键菜单，提供更沉浸的体验
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    
    // 添加页面进入动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-out';
        document.body.style.opacity = '1';
    }, 100);
})