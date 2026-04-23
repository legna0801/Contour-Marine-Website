import { page } from '../layout'

export function gallery(): string {
  const items = [
    { src: 'dm8XLnAsP5s1Y4N64Vu78izPQQwTNLtCzVvvNysOJk3QCv7zby0%2BiEzKPcS5SSYTJk0drU8FfeK64QsN4caluIATc9U1pU7e7ZUL4HZ0Z2n%2Few0h0%2FsA0mNG40bosgoQHTDS', u2: 'VKsmtN%2FFAsSE2tai', alt: 'Boat lift walkway over calm South Florida waterway', caption: 'Boat Lift Installation', cat: 'boat-lifts' },
    { src: 'DObt%2FYzlP5oacfAoYPp2dHHjZSOp0Cs8NN0AHAtIypF8BoXAVCWf79oUHXK1%2BNsWcykTZZS9V%2FHqtmZiIN40iG8%2Fgk6rSLoKicjJKltaWFrGPtf%2BPCc3rPWIjjSu3RxyTVKA', u2: 'qXbpWoyb6RKkAXZg', alt: 'Installed boat lift frame and controls — South Florida dock', caption: 'Boat Lift Installation', cat: 'boat-lifts' },
    { src: 'od7rFXp3ZAeA8Qdd%2B9kYnAmCQxx4hp3Qi6DKjr5FhHUchVok%2Bnz50uRwB%2B27xuNa8hOLIk85iHMgSPub%2BfmeDpgjpBixnGbVJe6SmrSPuIKG1qTFOv8x2dE3dz7pkG9zhD63', u2: 'E2QjwCijiv9r077h', alt: 'Boat lift rails and motor detail — South Florida waterfront', caption: 'Boat Lift Installation', cat: 'boat-lifts' },
    { src: '5tvYPPGd7fdOALbLzZ8TojGAt8Okdy1CV%2BJJ2ve9QQGAUmPYkrgcy4UasCWT2J0VqdlEgBHwO1FRYkRcOOaCm7SE%2FdopSRlwCMtrU4BYCxdNbFJgNfODSJjmBAAvwIcLvmg8GydL8MKQ9evbQfM%3D', u2: '8mWm9jTCWoehdglu', alt: 'Completed concrete seawall cap with timber deck foreground, palm trees and luxury home', caption: 'Completed Seawall Cap', cat: 'seawalls' },
    { src: 'l0ar10TCzhfaMKBTIkk0d0oExs%2BI%2F01hFpDPTT5xpgq5%2FpHYy6brenjEAke1lq3XU2X%2F758uyaCPfPLnWL6aUTe9v0PT2RUcLI5xcWcZ4BzpQ1wTtdmy0vrLr8WCsxQwvMzTSxA%2FmA%3D%3D', u2: 'NLJ09u1%2FpOHLWT6h', alt: 'Seawall under construction — rebar and formwork along South Florida canal', caption: 'Seawall Construction', cat: 'seawalls' },
    { src: 'u6T5u4z0kw%2BwYU%2BkFCKjwv0DEoGUBxN5CTWoWp1UNUrGLPySnV3cJ5aL5h0Fg4IfAOyW8Q6H7CynWKzo%2FrX%2BrNcKvmUr3SHmoGQ%2BXnYICkvxZnH8n%2BcB8eRuXWPFJRtbCiMzpf0qzwGambu6iWtIUwwXeg%3D%3D', u2: '08rUmxaV6OMmY1Dk', alt: 'Seawall and dock construction with crane barge — South Florida', caption: 'Seawall Construction', cat: 'seawalls' },
    { src: 'Eg8l%2FlCnKjt19VCdw%2FGZpMTQ4HcFzuclAH5Y0eFdHwY%2FFNmCWc2DbXvETyE1dQ7FTtrRZajGe94s7SxAtT5DYE0C3FRFnqOqgZnfp3L40t0WOjWHPfdUo8noWl6OPQLEEDLcN%2FRD', u2: 'Wi2jMaBpbNvmO%2FFV', alt: 'Completed waterfront dock with bollard lighting — South Florida', caption: 'Completed Waterfront', cat: 'docks' },
    { src: '5LhN%2BpCcPxFzyPzrx8iJ4DwcIm1dMUIZqKj%2FbEE3JE0IlpZSOXqr89xwGCd2y%2FrP%2BzHocn1xESNLikJaTxmWeu5l7UzNUwOFyOjMBE2aUNT4gBSDtcPhHdr0GBo75bB47XtJ31%2BfjASzkXEf2Oeb', u2: 'nE62oonLDmPRfwWY', alt: 'Luxury custom dock at night with teal underwater lighting and teak wood decking', caption: 'Dock — Night Lighting', cat: 'docks' },
    { src: 'Tb2UCQcWtQDd5m8Tq2sk%2Bnh5vu34Qz6dV7DLkXuxU5Pys%2BffsDcjJhyKj9vd7CsLxAG5V7OqggsXJS3RtwWBSoUJM3wLUb5HH8j7mPJxsGWZqPDWuTDU0fVp2v82lGy%2BcKPaiBmrr1nb0RpQPxL0kw%3D%3D', u2: 'S6hMBQd%2B8I1H1dED', alt: 'Gray composite dock walkway with dark pilings along a South Florida canal', caption: 'Composite Gray Dock', cat: 'docks' },
    { src: 'ObxVLwfby0SvI3mCsaOaqa9NkmyyfAqpW8kPYtWiM5a8B678%2F2vTM6szYyPixIFMXcb%2BTETkUPJIVufz4PxHHGPkkaR%2BEfGhcujqcro7Kgx3brc3edikTk%2BEi%2BPjhtL0XQhA%2BlZRjDhlOOqu5y%2B%2FbzKgZD%2Bz', u2: 'xmB9jyuH7SPLoMBg', alt: 'Modern dock walkway with white square posts and city skyline', caption: 'Dock — White Post Walkway', cat: 'docks' },
    { src: 'W5UC3SkG7H2vaRNGUkyWAlb90npfXWc2uGa4YFgeYWhyD%2FhIbuzAUWTFkKv%2BXcGdB4ZPTqDoBu%2FRqFM5LZ3u99apPMQ8J%2F5XkGYlf3oDjWMF7BTzpxWT5mSSYbw89V00NxZogssq%2Fmx%2Bdt%2BanFEjpQDOMA%3D%3D', u2: 'QpFwjnnp17R23OxK', alt: 'Composite dock walkway with palm trees and moored boats', caption: 'Composite Dock', cat: 'docks' },
    { src: 'u5P3Zn9NvcUcynRVWZXFKARYACy%2BvslCgU1sZg6JS9W9ReVuyabR6%2BkRBy2Td%2BWrpJZwESsw9zFgwgyu2J2hCdX4oPTlgNCZMR%2BJsHLRNdpCEn79X36un9pATtNOsQR%2BNz9ZnyWLjDhBElkl6kU%3D', u2: 'QvgHmTCvQgL2hSZI', alt: 'Large custom dock installation with composite decking and covered yacht', caption: 'Large Custom Dock', cat: 'docks' },
    { src: 'AM6%2B3HPbfefCrWsXm9htyi5ejX2qIDI5XRYEBmGoC6M8nzmFMcbTn%2F6RnK1dLDrU5T6la9ldpGT9umXPeAW06G0LY7vuIuoshqxdHpwjalpQDJ5EImlDddjwGfm5J2UIZYOsnv0XP1ytkS0%3D', u2: 'Xh16B4q6V%2BWmSPpS', alt: 'Dock extension with composite decking — bright daylight', caption: 'Dock Extension — Day', cat: 'docks' },
    { src: 'RDLMzspsNAohRJvKfFzCKC7csuHJ7%2BtSaMcUgdtJSsU0qHUmMsObpEAvVRt9Rrm7kAoC5dEocZ61RhzHncHsRgOuVUMq2Wp%2B%2FIVnpYCe1AjjdVmelhKX%2FVe%2BUdqMYhXqOtlE14JYRmtrIjM0Zl9D', u2: '5mA37Kn74sgwZbG7', alt: 'Dock extension at dusk with warm evening light', caption: 'Dock Extension — Evening', cat: 'docks' },
    { src: 'nV6qryNm4yihfo%2FBE3kLnU6EW9sZoVYkDCZKZvo7gfAHlZWsJsN3i2zrXKZ1pxWmtxmIlYeay5YxhLuXUYfx09AFyptBSHVxOs4DYI9kmeiS4nPC6DuK9752DPWtp259ttDjuJrJB7Xg', u2: 'TLtQ5bzjzcFMRsDJ', alt: 'Dock access ramp and gangway with construction crane barge', caption: 'Dock Access Ramp', cat: 'docks' },
    { src: 'oOWfi1KYw3FV48uSW5IO9yF6mXezlUFe1K8lAjry%2B%2BtVO9WcgzMZ0B77FnmyixoUOxcz0k6I67zyVNGmuSwmDyZk4OS2ozCZKcFlYLYD36jiSvnYOCv%2F7g%2Bo%2B9RpOlp6Js10l3zgcLB6MxLBfQU%3D', u2: 'LVf6UDY4gQt%2FtDfE', alt: 'Luxury dock with dual boat lifts and covered slips', caption: 'Luxury Dock with Boat Lifts', cat: 'docks' },
    { src: 'MTeU1mXbOqaOHiZwF4qgXg0JxoNZXgpEZcWlaQ3874k4BMtw4CtqlZ7xqfTtZcpDFZrIQzvy5JRdjJbxdhfqaFEDNhRo%2FySbf2%2BpzPzDD4beiFzZbubUrQu1VKNSZ4eaLWWPZr0B8d22zrawOg%3D%3D', u2: 'uGdjNX3tWCdjx6YX', alt: 'Multi-level dock and boat lift system on South Florida waterway', caption: 'Multi-Level Dock & Lift', cat: 'docks' },
    { src: 'pNEMpqKXSf4e%2BKG4hV8nthzMd3NSYWdVTuH1bZKU1z53hrSxvLnKZkJs1UDvEL9yTReMiv1F2iyfkTVDRmM7QKyFNiGV6Hc7wnV5T1IpKm%2FZcZAxu%2FQYKr%2BWIbkr3ktZSIz2%2BmxObYN6Q1lkow%3D%3D', u2: 'Ca6vjvTX%2FyfThKhD', alt: 'Illuminated composite waterfront deck at night with blue LED rail accent lights', caption: 'Deck — Evening Lighting', cat: 'decks' },
    { src: 'UrOMAPeIKa36fPJupW%2F5wVmo6ra8yCpUS5y7vYbf7PwUJgv8zMyq%2BokiiBNrlQpioIeY08Nwx2E8sDLzhbQtHtxQJoxKCz5q8FJHxdSESC1dMclWptfupTP7UWLQcM3NqZN7Cs4%3D', u2: 'eaCJaXAbNwJX0EWC', alt: 'Dock framing and structural pilings under construction', caption: 'Dock Construction', cat: 'docks' },
    { src: 'HmtgP0ML9%2FbTKoqdYOvFQ7otPyebdQD%2BsVPaUm9TdryM%2Frl%2FH8MjErVgSrEsOq%2BiRsO0EFUOtmxEVU3%2F87FUM3jUdB3Hek6e06zU2BgF1UtajN1bgy0IdP2gf4RxEcE4qHs%3D', u2: '8eVXuMFD5q%2FHH1Fj', alt: 'Finished custom dock with cable railing — South Florida waterway', caption: 'Completed Dock', cat: 'docks' },
    { src: 'ixBv1LwWgi3RL6Ka%2Bckz6hvphmwXkg1RrBE2fgO%2B6PHzx%2BR2To%2FuM1NUP1ApeAdsxDvKBSfPQsx3Dxir3HosODuVs86mIXfSygqf%2BSZdWpdsW4wav97R0I7bpHwayzHen9ZC3x7Y%2F%2Fvz2UuTlLp%2B', u2: 'Q7i0LJ4HWKrs5%2Fdn', alt: 'Finished dock platform with boat lift posts and covered boat', caption: 'Boat Lift Platform', cat: 'boat-lifts' },
    { src: 'Yc9F34Exy4vPMjrTIBXEHhsVtLOKX6EFd8bxz1r3hyNHlOhSI9RWZjLa17s%2B04Ta%2FBdg6oWnmHPeby71r%2BnYgm%2BpySzwIBZiKjc0AHsAVTV2jjeCM91%2B%2B11wXntjsGHg6KqKMTYMAdV3kNeztQxA', u2: 'IniUVo6Z5kbGQSTa', alt: 'Seawall construction with fresh concrete formwork', caption: 'Seawall Construction', cat: 'seawalls' },
    { src: 'd%2BqbxpUlKF3yeJ2pUUvhlJE5wzapmT6Oo7TzUFyECqKgqC5uW5wxx8XWemVKljO1eMIUhSLcL2f59Zo7pQnpToVoRCdd7F0zZ1O%2F%2B2%2Bb0fgspsSKuaGotrzg6PAD9M9ROH9uhZPHtzWQBp8b', u2: 'Zp8ALgtSyVTBQKAl', alt: 'Completed concrete seawall cap with square marine pilings', caption: 'Seawall Cap & Pilings', cat: 'seawalls' },
    { src: '4GbRQxlHBsvFoPV4XYHj87rhdZTdNPYtlAJVCAQutL3zbbiOnKG4Mg9Esp4fm6RPJxuDIzt0h7Lz9ROjMb6pIj7aNyICgoUhJ7khC2i3ch1bQmSeA89ZfVaw2lsxuGGuh6RMWj%2BQeew%3D', u2: 'yQ7VVurbOExvFG0a', alt: 'Deco double jet ski lift aluminum frame installation', caption: 'Deco Double Jet Ski Lift', cat: 'boat-lifts' },
    { src: '1o23JFKh65Nb180V3gFDVuQE6TJeALB06nM%2BZ8AA%2Bl3to15QxGGSGlKGMrjn%2FlRvyMqlVSOR60a3LEaB0G6%2FVB8xczgTd43WJ9%2B7Uo%2BqGnKyNSIovaneqrOhUogpoyRivCb0%2B3bxt0Q%3D', u2: 'XvzNT2me6mebi%2FQ4', alt: 'Dual Yamaha WaveRunners loaded on deco double jet ski lift', caption: 'Deco Double Jet Ski Lift', cat: 'boat-lifts' },
    { src: 'yRfqVBDD7nDExbPDg3YrSsvvKq3aZU9%2B%2FA3VQRx7yKnmnppk5aDldyBLYaeGLBYO%2FcmMUHgsLvjTDQxOZhFy7w5acgei8DhDjVN6Cll486GHUwt0MvM4RswuINOpqDWKa4mS9HYRtE4%3D', u2: 'FzS%2FQnvtledJPFv2', alt: 'Yamaha WaveRunner on deco lift — side angle South Florida dock', caption: 'Deco Double Jet Ski Lift', cat: 'boat-lifts' },
    { src: '4O%2FaO3sL8fUQ3G5OvIZfGz%2FiXvygrRvtw%2FtIWr9wC2l8OluByFWLWnQs7JjCYthDQbBUmQycOJffB0hvMwFjz0cZmDbMB8TcVTfWcJ9wKQAxiLTnBWZm13EOIhH9NWMuohxxEXNCW%2Fw%3D', u2: 'kc3IkV4T1KQHKt5o', alt: 'Deco double jet ski lift cradles wide view with yacht alongside', caption: 'Deco Double Jet Ski Lift', cat: 'boat-lifts' },
    { src: 'Xez9ipMhDUs6lynq0IQZ%2BAchxJYm7fP6Cv5BfZXzy4xLE9U6irH7hbOuCi0wWt%2FRy53vaa%2FeNdZlpw%2FtcsxmJkpo5uUriijt8dMnIX9%2FPN9EyeQbrRUKT4uYz%2B7HzMuAZZIj%2BwRxSXI%3D', u2: 'zIljEbp5gR2QbCMj', alt: 'Concrete marine pilings installed along South Florida canal', caption: 'Marine Pilings', cat: 'pilings' },
    { src: 'xixlyJLapC1q0yLso9Vf5Nul4yHJfaAfm57FHpPFoAMjvT5jk5JRYX01qVWscGXR8XHyDrwuln5xS9tSS7nIS3ajRHBFiGfYDU1PMZpWipd8ErcNPWZsCC5CB%2Ffk%2BhrMrEEUbhdnAJfeRODYFGU4Mg%3D%3D', u2: 'X5MlWB4YGtHW7r68', alt: 'Square composite piling wraps on South Florida dock', caption: 'Square Composite Wrap', cat: 'pilings' },
    { src: 'NTyYcJHtE6nn7Pe818QStMJjo%2FkU6h1IcUFxb0y2VwZ5k4g5PvVir6t612gbKwNPZnvw85bms45mCt4w%2BhGIk1id7VvKQ43%2BeN97mf%2F4I9v7oI%2B%2Fk2ds1zCy2TJp7OywV7mnLG9m2ij7hJbSOtphlg%3D%3D', u2: 'AqhqLItnlcxslyrF', alt: 'Traditional wood pilings with composite wrap caps along South Florida waterfront', caption: 'Traditional Wood Pilings', cat: 'pilings' },
    { src: 'V%2BpKQsAl0vNqbc9C6Dj6OlR7sJBHf43qlbfE2elbDTDvswrqcKagA8ppdmzeN6dp4Dk1erP%2FWKMUiZlbKy7vEME2O%2F9HiiyfNVAhP8utxyH9rU%2FW3Wn712bFUh7EkkYLHw%3D%3D', u2: '0LnJlm4msCaQ7VZe', alt: 'Seawall forming and steel reinforcement installation', caption: 'Forming & Reinforcement', cat: 'seawalls' },
    { src: 'PxwiuRZliE8eJdpaBBHCpHqoJwX0gqvRGJFiA%2B%2BOtH26fpMIxglaXyiDIu4Kkohs9CPMfs5XI9Gzr1fEoYlZa7PKygNsmZfA76%2F%2B3Kmk6OqPR8X3P%2FRkj8XapoUabhWnKg%3D%3D', u2: 'v5YpC%2FnKQmp0Pgum', alt: 'Concrete being poured into seawall formwork', caption: 'Concrete Placement', cat: 'seawalls' },
    { src: 'qV35JkKgnmPdT%2FIZFYGUqiryA8lSCkcWYNoeWU%2Fo%2FXom8z5741CXbIi8Sgt6MqRLTc2VfoseRMjTTstkWmhTqg%2FzgYfrmxdlVn7PFIaWxVkpmakpl%2B3vKY%2BIrVVx4vxmWA%3D%3D', u2: 'OYq1%2BBcFc2WBOA4t', alt: 'Finished seawall — completed concrete cap along South Florida canal', caption: 'Finished Seawall', cat: 'seawalls' },
    { src: 'EiD7tNRA33QhNru6%2BEjbZJSWFLiETXZYh8vHJ8jK1H7sFrcEfNw0w3Pjfcbe7LW%2BAbdM7Ajill0cECNpM9WYLjyHGB9aAJwl3ooKxknF7cR1WvgNz6mnzY%2BugCKFFw%2BhXiwvGPo9VF4nKJ7E', u2: 'QnT2%2BhG0e72siijZ', alt: 'Seawall construction in progress — before transformation', caption: 'Seawall — Before', cat: 'seawalls' },
    { src: 'w19t2yqtXrVzaoJ50AExHek%2B8eDaisM0EzppRRiaytQLcJqBw0%2FtoU2sLhiE1gSN%2B3DU1iqBI1KIIs3o6bpsQJ%2BVp1lHSwCEoGhCELx78LpGn%2Fn2FiTQtqg4VUbeGjxGpQCE4Mi4CPTL', u2: 'J8wQ9XFNppUMZv3U', alt: 'Completed seawall — finished waterfront daytime view', caption: 'Seawall — After (Day)', cat: 'seawalls' },
    { src: 'k3EE9XffY2ii1XE2nWu2hyTNSgjJ3aZT8zoFsxtvbHJg7LNY0obz77lmgLqDpKcxJi4EnrYaEv9G5pO86iKsvNEHC9HnlJnqeq7gbVHi7ExrRWV0GGmZlhntNXGriwiGBAvXP3iabv4RZ5g%3D', u2: 'ZJei9ctAYsQJxzFh', alt: 'Completed seawall with integrated lighting at night', caption: 'Seawall — After (Night)', cat: 'seawalls' },
    { src: 'TiA9bvgQRSFMFq7O42phUdg8ieiJyPLUSoFOMx9WnNezW0J0RLDk2jzPLMbCvq9XvB1cbziRFHR%2Bk6FwjI2z61YIVVicFFg6whQLCVv4gytB%2FUvWbt2dmNsCL74PkleKax8fU9dM9eOgCf8i', u2: 'ULLkUS8wszCKK3xj', alt: 'Bare concrete rooftop before composite deck installation', caption: 'Rooftop Deck — Before', cat: 'decks' },
    { src: '9iy2ktAND98Hyh0WAt7OZXQE5342VhUf3yc%2FHp86UQygics4xywX5XvrMhTIVFL4gTHmiuIiDV1iv496ONPm8KgJdWtAZ0mJ4F%2F%2BL6S%2FPipVBjWDuBDGRdwH53Vt42e%2B76yHs9YTjJUagSk%3D', u2: 'AlrUxm7Yai1zJP07', alt: 'Finished composite rooftop deck', caption: 'Rooftop Deck — After', cat: 'decks' },
    { src: 'rcV1OGd4g%2BY074pVSouEG%2F0AiGxdjZS4D%2BgFI0uegWs6c2Ap%2BdgbYeVUTuYrzY%2FOnPzRW03BTukZ%2F%2BIdaIa%2BK15lSh0%2F1FQB4ufySYcVf0GtH7qZDatPbQxtQPP2JQ7nsUgfpe9TElY%3D', u2: 'tcqJgcv40heTBj%2FJ', alt: 'Luxury Ipe hardwood waterfront deck with palm tree and tropical landscaping', caption: 'Waterfront Hardwood Deck', cat: 'decks' },
    { src: '%2BtWQbWnAsrQa5WhVM%2FlI0zUqtdAcuZeZaZ%2B3p7%2FPrZzBjd%2BV0BRZFrtnxcZ9RS0Pq3jX8kdV9SZOIPdcLer0PEZfBV1vDCQgcnNfg6EW4sSRyZFo7XDU7GWohf7njcL%2BroSwSm8A', u2: 'dRoKGo5Mbb%2Fm0dZF', alt: 'Center console on boat lift, rear view', caption: 'Boat Lift — Rear View', cat: 'boat-lifts' },
    { src: 'ef0ooob687dXu9Zof5vT%2BMqnONRfC83lbjuB7KEFsGP4%2FPf3fJswXEWuryLY%2Fp5BDIN91%2FDTPGeeBHeITHPvQUzHILV9AmVnbVy91V16zcRhlOCqJ01Sr5t%2B%2BVCPrfyIKVWxH7tj', u2: '8SktKj7BqbbajlrK', alt: 'Center console on boat lift, side view', caption: 'Boat Lift — Side View', cat: 'boat-lifts' },
  ]

  const galleryItems = items.map(item => `
    <div class="gallery-item" data-cat="${item.cat}">
      <img
        src="https://sspark.genspark.ai/cfimages?u1=${item.src}&u2=${item.u2}&width=1024"
        alt="${item.alt}"
        loading="lazy"
      >
      <div class="gallery-item-caption">${item.caption}</div>
    </div>
  `).join('')

  return page(
    'Project Gallery | Contour Marine | South Florida',
    'Browse our portfolio of seawalls, docks, decks, boat lifts & pilings built across Broward & Miami-Dade. Contour Marine — South Florida\'s premier marine contractor.',
    '/gallery.html',
    `
    <!-- ===== PAGE HEADER ===== -->
    <section class="page-header">
      <div class="container">
        <span class="section-label">Our Portfolio</span>
        <h1>Project <em>Gallery</em></h1>
        <p class="lead">A look at our recent work across South Florida — seawalls, docks, decks, boat lifts, and pilings.</p>
      </div>
    </section>

    <!-- ===== GALLERY ===== -->
    <section class="section">
      <div class="container">
        <!-- Filter tabs -->
        <div class="gallery-filters">
          <button class="gallery-filter active" data-filter="all">All Projects</button>
          <button class="gallery-filter" data-filter="seawalls">Seawalls</button>
          <button class="gallery-filter" data-filter="docks">Docks</button>
          <button class="gallery-filter" data-filter="decks">Decks</button>
          <button class="gallery-filter" data-filter="boat-lifts">Boat Lifts</button>
          <button class="gallery-filter" data-filter="pilings">Pilings</button>
        </div>

        <!-- Gallery grid -->
        <div class="gallery-grid" id="gallery-grid">
          ${galleryItems}
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-strip">
      <div class="container">
        <span class="section-label section-label-gold">Ready to Build?</span>
        <h2>Add Your Project to Our Gallery</h2>
        <p>Contact us for a free consultation — let's build something worth showing off.</p>
        <div class="btn-group">
          <a href="/contact.html" class="btn btn-gold">Get a Free Quote</a>
          <a href="/about.html" class="btn btn-outline-white">Learn About Us</a>
        </div>
      </div>
    </section>

    <script>
    (function(){
      var filters = document.querySelectorAll('.gallery-filter');
      var items   = document.querySelectorAll('.gallery-item');
      filters.forEach(function(btn){
        btn.addEventListener('click', function(){
          filters.forEach(function(b){ b.classList.remove('active'); });
          btn.classList.add('active');
          var f = btn.getAttribute('data-filter');
          items.forEach(function(item){
            if(f === 'all' || item.getAttribute('data-cat') === f){
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    })();
    </script>
    `
  )
}
