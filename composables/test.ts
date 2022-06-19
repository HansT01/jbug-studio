const testImage = '../assets/jumboart.jpg'

export interface Product {
  message: string
  image?: string
}

export const testProduct: Product[] = [{ message: 'Slide 3', image: testImage }, { message: 'Slide 2' }, { message: 'Slide 3' }, { message: 'Slide 5' }]
