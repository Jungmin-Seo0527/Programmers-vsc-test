export default class Sample {

    $target = null

    constructor($target) {
        this.$target = $target

        const $h1 = document.createElement('h1')
        $h1.innerText = '샘플 프로젝트zzz'

        $target.appendChild($h1)
    }
}