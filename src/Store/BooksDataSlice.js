import { createSlice } from "@reduxjs/toolkit";

const initialData = localStorage.getItem("booksData")
  ? JSON.parse(localStorage.getItem("booksData"))
  : {
      books: [
        {
          title: "The Alchemist",
          author: "Paulo Coelho",
          year: "1988",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
          price: "170",
          genre: "Novel, Drama, Quest, Fantasy Fiction, Adventure fiction",
          id: "1",
          fav: false,
          about: `An Andalusian shepherd boy named Santiago dreams of a treasure while in a ruined church.
           He consults a Gypsy fortune-teller about the meaning of the recurring dream. The woman interprets 
           it as a prophecy, telling the boy that he will discover a treasure at the Egyptian pyramids.After
            Santiago sets out, he meets an old king Melchizedek, or the king of Salem, who tells him to sell 
            his sheep so as to travel to Egypt and accomplish his 'Personal Legend'. Early on his arrival in
            Africa, a man who claims to be able to take Santiago to the pyramids instead robs him of the money
            he had made from his flock.`,
        },
        {
          title: "The Silent Patient",
          author: " Alex Michaelides",
          year: "2019",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71Bz8NshEVL.jpg",
          price: "250",
          genre:
            "Thriller, Novel, Mystery, Psychological thriller, Suspense, Psychological Fiction",
          id: "2",
          fav: false,
          about: `The Silent Patient is a 2019 psychological thriller novel written by 
          British–Cypriot author Alex Michaelides. The debut novel was published by 
          Celadon Books, a division of Macmillan Publishers, on 5 February 2019. The audiobook version,
           released on the same date, is read by Louise Brealey and Jack Hawkins.`,
        },
        {
          title: "The Diary of a Young Girl",
          author: "Anne Frank",
          year: "1947",
          imageUrl: "https://m.media-amazon.com/images/I/51PUstzRghL.jpg",
          price: "270",
          genre:
            "Biography, Autobiography, Personal narrative, Jewish literature",
          id: "3",
          fav: false,
          about: `The Diary of a Young Girl, also known as The Diary of Anne Frank, is a book of the writings from the
           Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the 
           Nazi occupation of the Netherlands.`,
        },
        {
          title: "Gone With the Wind",
          author: " Margaret Mitchell",
          year: "1936",
          imageUrl:
            "https://kbimages1-a.akamaihd.net/a2afca89-d921-43fe-9ab1-86ee02b29bc2/353/569/90/False/gone-with-the-wind-68.jpg",
          price: "289",
          genre: "Novel, Historical Fiction",
          id: "4",
          fav: false,
          about: `Gone with the Wind is a novel by American writer Margaret Mitchell, first published in 1936. The story
           is set in Clayton County and Atlanta, both in Georgia, during the American Civil War and Reconstruction Era.`,
        },
        {
          title: "The Merry Adventures of Robin Hood",
          author: "Howard Pyle",
          year: "1883",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81Zizer74aL.jpg",
          price: "189",
          genre: "Children's literature, historical fiction",
          id: "5",
          fav: false,
          about: `The Merry Adventures of Robin Hood of Great Renown in Nottinghamshire is an 1883 novel by the American 
          illustrator and writer Howard Pyle. Pyle compiled the traditional Robin Hood ballads as a series of episodes 
          of a coherent narrative`,
        },
        {
          title: "The Kite Runner",
          author: "Khaled Hosseini",
          year: "2003",
          imageUrl: "https://m.media-amazon.com/images/I/41QlgiuLl5L.jpg",
          price: "329",
          genre:
            "Historical fiction, Drama, Classic, Coming-of-age, Literary realism",
          id: "6",
          fav: false,
          about: `The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 
          by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul.`,
        },
        {
          title: "It Ends With Us: A Novel",
          author: " Colleen Hoover",
          year: "2016",
          imageUrl:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482l/27362503._SY475_.jpg",
          price: "349",
          genre: " Romance novel, Fiction, Contemporary romance",
          id: "7",
          fav: false,
          about: `It Ends with Us is a book that follows a girl named Lily who has just moved and is ready to start her
           life after college. Lily then meets a guy named Ryle and she falls for him. As she is developing feelings for 
           Ryle, Atlas, her first love, reappears and challenges the relationship between Lily and Ryle.`,
        },
        {
          title: "Inferno",
          author: "Dan Brown",
          year: "2013",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/91Bx8Fqx1pL.jpg",
          price: "280",
          genre:
            "Thriller, Mystery, Suspense, Detective fiction, Adventure fiction, Conspiracy fiction",
          id: "8",
          fav: false,
          about: `Inferno is a 2013 mystery thriller novel by American author Dan Brown and the fourth book in his Robert 
          Langdon series, following Angels & Demons, The Da Vinci Code and The Lost Symbol. The book was published on May 
          14, 2013, ten years after publication of The Da Vinci Code, by Doubleday.`,
        },
        {
          title: "Love and Peace",
          author: "Leo Tolstoy",
          year: "1867",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/91teiIZ5vwL.jpg",
          price: "240",
          genre:
            "Novel, historical novel, Historical Fiction, Romance novel, War story, Philosophical fiction",
          id: "9",
          fav: false,
          about: `War and Peace is a literary work mixed with chapters on history and philosophy by the Russian author Leo 
          Tolstoy. It was first published serially, then published in its entirety in 1869. It is regarded as one of Tolstoy's 
          finest literary achievements and remains an internationally praised classic of world literature.`,
        },
        {
          title: "The Color Purple",
          author: "Alice Walker",
          year: "1982",
          imageUrl:
            "https://i.ebayimg.com/images/g/Y1wAAOSwio1gADqr/s-l500.jpg",
          price: "190",
          genre: "Novel, Epistolary novel, Domestic Fiction",
          id: "10",
          fav: false,
          about: `The Color Purple is a 1982 epistolary novel by American author Alice Walker which won the 1983 Pulitzer
           Prize for Fiction and the National Book Award for Fiction. It was later adapted into a film and musical of the 
           same name`,
        },
        {
          title: "The Sense of an Ending",
          author: "Julian Barnes",
          year: "2011",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYzI5ZDM2NjYtNmVhMS00Y2Q4LTg5ZWUtZjUwOGNkZDJhNGY2L2ltYWdlXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
          price: "220",
          genre: " Novel, Psychological Fiction",
          id: "11",
          fav: false,
          about: `The Sense of an Ending is a 2011 novel written by British author Julian Barnes. The book is Barnes's 
          eleventh novel written under his own name and was released on 4 August 2011 in the United Kingdom.`,
        },
        {
          title: "Gone Girl",
          author: "Gillian Flynn",
          year: "2012",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71DrHgpX3YL.jpg",
          price: "320",
          genre: "Novel, Thriller, Fiction, Mystery, Suspense",
          id: "12",
          fav: false,
          about: `Gone Girl is a 2012 crime thriller novel by American writer Gillian Flynn. It was published by Crown Publishing
           Group in June 2012. The novel was popular and made the New York Times Best Seller list. The sense of suspense in the 
           novel comes from whether Nick Dunne is responsible for the disappearance of his wife Amy`,
        },
        {
          title: "Harry Potter and the Chamber of Secrets",
          author: "J.K. Rowling",
          year: "1998",
          imageUrl:
            "https://www.jkrowling.com/wp-content/uploads/2016/10/HPATCOS_Hero_OnGrey.png",
          price: "280",
          genre: "Fantasy",
          id: "13",
          fav: false,
          about: `Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling 
          and the second novel in the Harry Potter series.`,
        },
        {
          title: "The Patriot",
          author: "Pearl S. Buck",
          year: "1940",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/415DPca20SL._SX342_SY445_QL70_ML2_.jpg",
          price: "180",
          genre: "Fiction",
          id: "14",
          fav: false,
          about: ` When Wu I-wan starts taking an interest in revolution, trouble follows: Winding up in prison, he becomes 
          friends with fellow dissident En-lan. Later, his name is put on a death list and he’s shipped off to Japan. Thankfully,
           his father, a wealthy Shanghai banker, has made arrangements for his exile, putting him in touch with a business 
           associate named Mr. Muraki. Absorbed in his new life, I-wan falls in love with Mr. Muraki’s daughter, and must prove
            he is worthy of her hand. As news spreads of what the Japanese army is doing back in China, I-wan realizes he must
             go back and fight for the country that banished him.`,
        },
      ],
    };

function addToLocalStorage() {
  if (!localStorage.getItem("booksData")) {
    localStorage.setItem("booksData", JSON.stringify(initialData.books));
  }
}
addToLocalStorage();

export const booksDataSlice = createSlice({
  name: "books",
  initialState: initialData,
  reducers: {
    add(state, action) {
      state.books.push(action.payload);
    },
    remove: (state, action) => {
      state.books = state.books.filter((elem) => {
        if (elem.id != action.payload) return elem;
        return "";
      });
    },
    update: (state, action) => {
      state.books = state.books.map((elem) => {
        if (elem.id != action.payload.id) {
          return elem;
        } else {
          return action.payload;
        }
      });
    },
    addRemoveFav: (state, action) => {
      state.books = state.books.map((elem) => {
        if (elem.id == action.payload.id) {
          elem.fav = !elem.fav;
        }
        return elem;
      });
    },
  },
});
export default booksDataSlice.actions;
export const reducer = booksDataSlice.reducer;
