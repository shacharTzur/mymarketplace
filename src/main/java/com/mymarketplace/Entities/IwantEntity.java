package com.mymarketplace.Entities;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "IWANTs_matches")
public class IwantEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "OWNER")
    private String owner;

    @Column(name = "SEARCHER")
    private String searcher;

    @Column(name = "product_id")
    private Long product_id;

    @Column(name = "search_mathces")
    private int matches;

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getSearcher() {
        return searcher;
    }

    public void setSearcher(String searcher) {
        this.searcher = searcher;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public int getMatches() {
        return matches;
    }

    public void setMatches(int matches) {
        this.matches = matches;
    }
}
