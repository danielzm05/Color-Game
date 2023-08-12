const correctCircle = new mojs.Shape({
    parent: '#bouncyCircle',
    shape: 'circle',
    fill: { '#2E9469': '#36AE7C' },
    radius: { 50: 700 },
    duration: 300,
    isYoyo: true,
    isShowStart: true,
    easing: 'bounce.inout',
    repeat: 1,
    stroke: '#2E9469',
    strokeWidth: 100,
});

const incorrectCircle = new mojs.Shape({
    parent: '#bouncyCircle',
    shape: 'circle',
    fill: { '#EB5353': '#EB5353' },
    radius: { 100: 710 },
    duration: 600,
    easing: 'elastic.inout',
    repeat: 0,
    stroke: '#EB3B3B',
    strokeWidth: 100,
});



