import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BannerComponent } from './banner-inline.component';

describe('Banner Component (inline template)', () => {
    let comp: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });

        fixture = TestBed.createComponent(BannerComponent);

        //BannerComponent test instance
        comp = fixture.componentInstance;

        //récupération du titre
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;

    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });

//The first test shows the benefit of automatic change detection.
    it('should display original title', () => {
        // Hooray! No `fixture.detectChanges()` needed
        expect(el.textContent).toContain(comp.title);
    });

    it('should still see original title after comp.title change', () => {
        const oldTitle = comp.title;
        comp.title = 'Test Title';
        // Displayed title is old because Angular didn't hear the change :(
        expect(el.textContent).toContain(oldTitle);
    });

    it('should display updated title after detectChanges', () => {
        comp.title = 'Test Title';
        fixture.detectChanges(); // detect changes explicitly
        expect(el.textContent).toContain(comp.title);
    });

}); 