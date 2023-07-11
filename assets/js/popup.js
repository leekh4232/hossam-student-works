const popupNotice = (props) => {
    const container = document.createElement('div');
    container.id = 'notice-popup';
    container.style = 'position: absolute; left: 50px; top: 50px; line-height: 150%; padding: 30px; background-color: rgb(43,43,43); color: #fff; font-size: 16px; width: 450px; z-index: 9999999;';

    const title = document.createElement('h1');
    title.style = 'border-bottom: 1px solid #eee; font-size: 24px; padding-bottom: 10px; margin-bottom: 15px';
    title.innerText = `${props.studentName} 훈련생의 포트폴리오 입니다.`;

    const p1 = document.createElement('p');
    p1.innerHTML = `이 페이지는 <font color="#ff0">${props.school}</font>에서 ${props.startDate}부터 ${props.endDate}까지 진행된 <font color="#ff0">${props.title}</font> 교육에 참여한 <font color="#ff0">${props.studentName}</font> 훈련생의 포트폴리오 입니다.`;

    const p2 = document.createElement('p');
    p2.innerText = '실제 운영을 위한 사이트가 아님에 착오 없으시기 바랍니다.';

    const p3 = document.createElement('p');
    p3.style = 'text-align: right';

    const a = document.createElement('a');
    a.href = '#';
    a.style = 'color: white; margin-top: 15px; display: inline-block';
    a.innerText = '[닫기]';
    a.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector('#notice-popup').remove();
        return false;
    });

    p3.appendChild(a);

    container.appendChild(title);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);
        
    document.body.appendChild(container);
}