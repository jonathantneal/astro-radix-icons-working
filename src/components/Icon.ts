import Download from './Icon/Download.astro'
import Height from './Icon/Height.astro'
import Width from './Icon/Width.astro'
import ZoomIn from './Icon/ZoomIn.astro'
import ZoomOut from './Icon/ZoomOut.astro'

const Icon = {
	Download,
	Height,
	Width,
	ZoomIn,
	ZoomOut,
} as {
	Download: IconComponent
	Height: IconComponent
	Width: IconComponent
	ZoomIn: IconComponent
	ZoomOut: IconComponent
}

interface IconComponent {
	(props: Props): {}
}

interface Props {
	'fill-rule'?: string
	'fill'?: string
	'height'?: number | string
	'size'?: number | string
	'title'?: string
	'viewBox'?: string
	'width'?: number | string
}

export default Icon

export { Download, Height, Width, ZoomIn, ZoomOut }
export type { Props }
