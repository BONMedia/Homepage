import Image from "next/image";
import copy from '../../assets/copy.svg'
import print from '../../assets/print.svg'
const InfiniteSlider = () => {

    return (
        <>
        <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<Image src={copy} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<Image src={print} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<Image src={copy} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<Image src={print} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<Image src={copy} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<Image src={print} height="100" width="250" alt="" />
		</div><div class="slide">
			<Image src={copy} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<Image src={print} height="100" width="250" alt="" />
		</div><div class="slide">
			<Image src={copy} height="100" width="250" alt="" />
		</div>
		
	</div>
</div>
        </>
    )
}

export default InfiniteSlider