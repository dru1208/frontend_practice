import CarouselContent from "../CarouselContent"

const defaultSlides = [1, 2, 3]
function createCarouselContent(slides = defaultSlides) {
  return new CarouselContent(slides)
}


describe("Carousel Content", () => {
  describe("accessing the current slide", () => {
    it("should access the current slide", () => {
      const content = createCarouselContent()
      expect(content.currentSlide()).toEqual(1)
    })
  })

  describe("navigating to the next slide", () => {
    it("should shift the current slide to the next if valid", () => {
      const content = createCarouselContent()
      content.toNext()
      expect(content.currentSlide()).toEqual(2)
    })

    it("should not shift the current slide if the next slide is not accessible", () => {
      const slides = [1]
      const content = createCarouselContent(slides)
      content.toNext()
      expect(content.currentSlide()).toEqual(1)
    })
  })

  describe("navigating to the previous slide", () => {
    it("should shift the current slide to the previous if valid", () => {
      const content = createCarouselContent()
      content.toNext()
      expect(content.currentSlide()).toEqual(2)
      content.toPrevious()
      expect(content.currentSlide()).toEqual(1)
    })

    it("should not shift the current slide if the previous slide is not accessible", () => {
      const content = createCarouselContent()
      expect(content.currentSlide()).toEqual(1)
    })
  })

  describe("accessing the next slide", () => {
    it("should access the next slide if there is a accessible slide", () => {
      const content = createCarouselContent()
      expect(content.nextSlide()).toEqual(2)
    })

    it("should return a null slide if there is no accessible next slide", () => {
      const content = createCarouselContent()
      content.toNext()
      content.toNext()
      expect(content.nextSlide()).toEqual(null)
    })
  })

  describe("accessing the previous slide", () => {
    it("should access the previous slide if there is an accessible slide", () => {
      const content = createCarouselContent()
      content.toNext()
      expect(content.previousSlide()).toEqual(1)
    })

    it("should return a null slide if there is no accessible previous slide", () => {
      const content = createCarouselContent()
      expect(content.previousSlide()).toEqual(null)
    })
  })
})