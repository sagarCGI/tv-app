import pageNotFound from "@/views/PageNotFound"
import { shallowMount } from '@vue/test-utils'


describe('In page not found', () => {
    const wrapper = shallowMount(pageNotFound)

    it('renders props.msg when passed', () => {
        expect(pageNotFound).toBeTruthy()
    })

    it("It should have a <nav></nav>", () => {
        expect(wrapper.html()).toContain("Return To Home Page");
    });

    it("It should have a <nav></nav>", () => {
        expect(wrapper.html()).toContain("Something went wrong!");
    });
})