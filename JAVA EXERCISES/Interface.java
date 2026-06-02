interface Playable {
    void play();
}

class Guitar implements Playable {

    @Override
    public void play() {
        System.out.println("Playing Guitar ");
    }
}

class Piano implements Playable {

    @SuppressWarnings("override")
    public void play() {
        System.out.println("Playing Piano ");
    }
}

public class Interface {
    public static void main(String[] args) {

        Playable g = new Guitar();
        Playable p = new Piano();

        g.play();
        p.play();
    }
}